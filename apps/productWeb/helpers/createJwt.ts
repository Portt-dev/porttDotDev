import jwt from 'jsonwebtoken'
const createJwt = (userId: string) => {
  const JWT_SECRET = process.env.JWT_SECRET
  const token = jwt.sign({ userId: userId }, `${JWT_SECRET}`, {
    expiresIn: '2d',
  })
  return token
}

export default createJwt
