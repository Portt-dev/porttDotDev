import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getSession} from "next-auth/react"
import { Octokit } from "@octokit/core";
import { PrismaClient } from "@prisma/client"
import createJwt from '../helpers/createJwt'
import jwt from 'jsonwebtoken'
interface props {
  name: string
}

const Home = ({ name }: props) => {

  const { data: session, status }: any = useSession()
  console.log(createJwt('someUserIdYes'))
  return (
    <div>
      <a href="/api/auth/signin">Sign up here!</a>
      <a href="/api/hello">GET GITHUB DATA</a>
    </div>
  )
}

/* export async function getServerSideProps(req: any, res: any) {
  const getData = async () => {
    const prisma = new PrismaClient()

    const data = await prisma.book.create({
      data: {
        title: "Testyeyey",
        author: 'darren'
      },
    })

    console.log(data)
  
  }
  getData()  
 
  
  return {
    props: {
      name: 'darren'
    }, // will be passed to the page component as props
  }
}  */


export default Home

