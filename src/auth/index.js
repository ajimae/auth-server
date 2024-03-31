import jwt from 'jsonwebtoken'

export function signToken(o) {
  console.log(o)
  return jwt.sign({ ...o }, process.env.SECRET, { expiresIn: process.env.EXPIRES_IN })
}

export function verifyToken(token) {
  try {
   return jwt.verify(token, process.env.SECRET) 
  } catch (error) {
   throw error
  }
}
