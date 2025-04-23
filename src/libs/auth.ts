import { signIn, signOut } from "next-auth/react";

export const handleSignIn = async () =>
  await signIn("google", { callbackUrl: "/home" });
export const handleSignOut = async () => await signOut();
