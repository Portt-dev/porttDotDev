import NextLink from 'next/link'
import {useEffect, useState} from 'react'
import {signIn, signOut, useSession, getSession} from 'next-auth/react'
import {Octokit} from '@octokit/core'
import {PrismaClient} from '@prisma/client'
import createJwt from '../helpers/createJwt'
import {Box, Heading, Button} from '@chakra-ui/react'
import type {NextApiRequest, NextApiResponse} from 'next'
interface props {
  type: string
}
const Home = ({type}: props) => {
  return (
    <Box>
      <a href="/api/auth/signin">Sign up here!</a>
      <a href="/api/github">GET GITHUB DATA</a>
      <Heading>THIS IS THE DASHBOARD PAGE</Heading>
    </Box>
  )
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx)
  // checks if the user has a current session and redirects accordingly
  if (!session)
    return {
      redirect: {permanent: false, destination: '/auth/signin'},
      props: {},
    }
  return {
    props: {},
  }
}
export default Home
