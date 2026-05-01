import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://online-book-platform-pi.vercel.app",
});
export const { signIn, signUp, signOut, useSession } = createAuthClient();
