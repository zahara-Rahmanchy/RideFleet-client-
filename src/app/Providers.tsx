"use client";

import {SessionProvider} from "next-auth/react";
import {RootLayoutProps} from "./layout";

export const AuthProvider = ({children}: RootLayoutProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
