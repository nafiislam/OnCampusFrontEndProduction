import NextAuth,{NextAuthOptions} from "next-auth";
import {JWT} from "next-auth/jwt";
import {Account} from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import jwt_decode from "jwt-decode";
import { encrypt } from "@/utils/encryption";

type Token = JWT &{
    access_token: string;
    decoded: any;
    id_token: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    error: string;
};

export const authOptions:NextAuthOptions = {
    providers: [
      KeycloakProvider({
        clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
        clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
        issuer: `${process.env.KEYCLOAK_ISSUER}`,
      }),
    ],
  
    callbacks: {
      async jwt({ token, account }:{ token: JWT; account: Account | null; trigger?: "signIn" | "signUp" | "update" | undefined; isNewUser?: boolean | undefined; session?: any; }) {
        const nowTimeStamp = Math.floor(Date.now() / 1000);
  
        if (account) {
          // account is only available the first time this callback is called on a new session (after the user signs in)
          token.decoded = jwt_decode(account?.access_token??'');
          token.access_token = account.access_token;
          token.id_token = account.id_token;
          token.expires_at = account.expires_at;
          token.refresh_token = account.refresh_token;
          return token;
        } else if (nowTimeStamp < token.expires_at) {
          // token has not expired yet, return it
          return token;
        } else {
          // token is expired, try to refresh it
          console.log("Token has expired. Will refresh...")
          try {
            const refreshedToken = await refreshAccessToken(token);
            console.log("Token is refreshed.")
            return refreshedToken;
          } catch (error) {
            console.error("Error refreshing access token", error);
            return { ...token, error: "RefreshAccessTokenError" };
          }
        }
      },
      async session({ session, token }:{session: any, token: Token}) {
        // Send properties to the client
        session.access_token = encrypt(token.access_token); // see utils/sessionTokenAccessor.js
        session.id_token = encrypt(token.id_token);  // see utils/sessionTokenAccessor.js
        session.roles = token.decoded.realm_access.roles;
        session.error = token.error;
        return session;
      },
    },
  };