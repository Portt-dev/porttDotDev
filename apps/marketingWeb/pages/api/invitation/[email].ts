import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/database'

/**
 *
 * @param req
 * @param res
 * @returns json data: '{"email": "johnDoe@gmail.com"}'
 */
async function sendInvitation(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query
  const query = await prisma.betaEmail.create({
    data: {
      email: `${email}`,
    },
  })

  console.log(query);
  return res.status(200).json({ data: query })
}

export default sendInvitation
