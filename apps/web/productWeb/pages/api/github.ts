// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { getToken } from 'next-auth/jwt';
import { Octokit } from "@octokit/core";
export default async (req: any, res: any) => {
  const session = await getSession({ req });

  const getData = async () => {
    const octokit = new Octokit({ auth: session?.accessToken });
    const response = await octokit.request('GET /user')
    console.log(response)
  }
  getData()
}