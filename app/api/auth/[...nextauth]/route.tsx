import NextAuth,{NextAuthOptions} from "next-auth";
import {JWT} from "next-auth/jwt";
import {Account} from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import jwt_decode from "jwt-decode";
import { encrypt } from "@/utils/encryption";
import {authOptions} from "@/app/authOptions/authOptions";


type Token = JWT &{
    access_token: string;
    decoded: any;
    id_token: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    error: string;
};

// this will refresh an expired access token, when needed
async function refreshAccessToken(token: Token) {
    const params = new URLSearchParams();
    params.append("client_id", process.env.KEYCLOAK_CLIENT_ID || "");
    params.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET || "");
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", token.refresh_token);

    const resp = await fetch(`${process.env.REFRESH_TOKEN_URL}`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
      method: "POST",
    });
    const refreshToken = await resp.json();
    if (!resp.ok) throw refreshToken;
  
    return {
      ...token,
      access_token: refreshToken.access_token,
      decoded: jwt_decode(refreshToken.access_token),
      id_token: refreshToken.id_token,
      expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
      refresh_token: refreshToken.refresh_token,
    };
  }



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
