import { NextApiRequest, NextApiResponse } from 'next'
import sdk from '@/utils/api/createInstanceSharetribe'
// eslint-disable-next-line @typescript-eslint/no-require-imports

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const accessToken = req.headers.authorization?.split(' ')[1]

  if (!accessToken) {
    return res.status(401).json({ message: 'Access token is missing' })
  }

  try {
    const response = await sdk.currentUser.show({ include: 'profileImage' })

    res
      .status(200)
      .json({ message: 'User retrieved successfully', user: response.data })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error retrieving user:', error)
    const statusCode = error?.status || 500
    res
      .status(statusCode)
      .json({ message: error?.message || 'Error retrieving user' })
  }
}
