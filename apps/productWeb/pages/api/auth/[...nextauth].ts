import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { NextApiRequest, NextApiResponse } from "next"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import createJwt from "../../../helpers/createJwt"
import prisma from "../../../prisma/client"
// we can hit this route with /api/auth/(signIn, callback, signOut, etc)
export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
        accessTokenUrl: "https://github.com/login/oauth/access_token",
        profile(profile) {
          return {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            image: profile.avatar_url,
            role: "developer", // users that signup with github always have developer roles
            porttApiJwt: null,
          }
        },
      }),
    ],
    theme: {
      colorScheme: "dark",
    },
    callbacks: {
      async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          const { accessToken, ...rest } = account
          token.accessToken = accessToken
          token.user = rest
        }
        return token
      },
      async session({ session, token }: any) {
        console.log(session)
        // get the user id and add it to the session
        const user = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
        })
        // give them a new portt-api token when a session is created
        const { porttApiJwt } = await prisma.user.update({
          where: {
            id: user?.id,
          },
          data: {
            porttApiJwt: createJwt(user?.id as string),
          },
        })
        session.accessToken = token.user.access_token
        session.id = user?.id
        session.porttApiJwt = porttApiJwt
        return session
      },
    },
    pages: {
      signIn: "/auth/signin",
    },
    session: { strategy: "jwt" },
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
  })
