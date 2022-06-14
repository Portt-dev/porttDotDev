import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/database'
/**
 *
 * @param req
 * @param res
 * @returns
 */

async function sendInvitation(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query
  const query = await prisma.betaEmail.create({
    data: {
      email: `${email}`,
    },
  })
  return res.status(200).json({ data: query })
}

export default sendInvitation
