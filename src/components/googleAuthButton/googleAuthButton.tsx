"use client";

import { handleSignIn } from "@/libs/auth";
import { Button } from "../ui/button/button";

export function GoogleAuthButton() {
  return <Button onClick={handleSignIn}>Sign In With Google Account</Button>;
}
