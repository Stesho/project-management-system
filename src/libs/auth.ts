import { signIn, signOut } from "next-auth/react";

export const handleSignIn = async () =>
  await signIn("google", { callbackUrl: "/projects" });
export const handleSignOut = async () => await signOut();
