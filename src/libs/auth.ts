import { Routes } from "@/constants/routing";
import { signIn, signOut } from "next-auth/react";

export const handleSignIn = async () =>
  await signIn("google", { callbackUrl: Routes.projects });
export const handleSignOut = async () => await signOut();
