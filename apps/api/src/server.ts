import {ApolloServer, AuthenticationError} from 'apollo-server'
import {schema} from './graphql/schema/schema'
import jwt from 'jsonwebtoken'
import {database} from './graphql/database'

const server = new ApolloServer({
  cors: {
    origin: '*',
    credentials: true,
  },
  introspection: true,
  schema,
  async context({req}) {
    // get the headers
    const {headers} = req
    const token = headers.authorization || ''
    // grab the user id from the header jwt
    const {userId, exp}: any = jwt.decode(token) || {}
    // if we cant get a userId out of the jwt then we need to throw an error
    if (!userId) throw new AuthenticationError('Unauthorized.')
    // check if there is a user withIn the decoded userId - (dont worry about the any typings -- still neeed to setup user models with nexus)
    const user: any = await database.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    // if there was a matching user and the token has not expired then return the context
    if (user?.id && Date.now() < exp * 1000) return {user}

    // we need to check if it did return a user.id but it was expired (then we need to issue a new jwt)
    if (user?.id && Date.now() > exp) {
      const JWT_SECRET = process.env.JWT_SECRET
      const newToken = jwt.sign({userId: userId}, `${JWT_SECRET}`, {
        expiresIn: '2d',
      })
      await database.prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          porttApiJwt: newToken,
        },
      })
      return {user}
    }
    // throw an error because the token was invalid
    throw new AuthenticationError('Unauthorized.')
  },
})

server.listen().then(({url}) => {
  console.log(`graphql api running at ${url}graphql`)
})
