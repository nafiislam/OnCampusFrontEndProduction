"use client";

import { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

interface CustomSession extends Session {
  error?: string;
  roles?: string[];
}

export default function Auth({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      (session as CustomSession)?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
    if ((session as CustomSession)?.roles.includes("admin")) {
      setIsAdmin(true);
    }
  }, [session, status]);

  if (!session) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl">You are not logged in</h1>
        </div>
      </>
    );
  } else if (!isAdmin) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl">Access Denied</h1>
        </div>
      </>
    );
  } else {
    return <>{children}</>;
  }
}
