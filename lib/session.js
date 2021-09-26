import { withIronSession } from 'next-iron-session'

export default function withSession(handler) {
  return withIronSession(handler, {
    password: '3d93bf8d7722c92b78afd364aeb8918bd71c6bc2fc86a372937d0ccfa1291fc9',
    cookieName: 'ramsar-restaurant',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  })
}
