import { NextApiRequest, NextApiResponse } from 'next'
import sdk from '@/utils/api/createInstanceSharetribe'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    const response = await sdk.login({
      username: email,
      password: password,
    })

    res.status(200).json({ message: 'Login successful', response })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Login error:', error)
    const statusCode = error?.status || 500
    res.status(statusCode).json({ message: error?.message || 'Login error' })
  }
}
