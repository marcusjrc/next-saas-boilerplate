import { pool } from "@/db/db"
import { createNewUser, findUserByEmail } from "@/db/queries/users.queries"
import NextAuth from "next-auth/next"
import Google from "next-auth/providers/google"

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      AUTH_GOOGLE_ID: string
      AUTH_GOOGLE_SECRET: string
    }
  }
}

export const handler = NextAuth({
  providers: [
    Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }
      try {
        const userReturned = await findUserByEmail.run({ email: user.email }, pool)      
        // if no user, then create user...
        if (!userReturned[0]) {
          await createNewUser.run({ email: user.email }, pool);
        }
        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  }
})
export { handler as GET, handler as POST }