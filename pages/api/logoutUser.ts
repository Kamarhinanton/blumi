import { NextApiRequest, NextApiResponse } from 'next'
import sdk from '@/utils/api/createInstanceSharetribe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    await sdk.logout()

    res.status(200).json({ message: 'Logout successful' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Logout error:', error)
    const statusCode = error?.status || 500
    res.status(statusCode).json({ message: error?.message || 'Login error' })
  }
}
