"use server";

import { signIn, signOut } from "@/auth";

export default async function signInAction() {
  await signIn();
}

export async function signOutAction() {
  await signOut();
}
