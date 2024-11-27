// pages/api/exchange-token.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import sdk from '@/utils/api/createInstanceSharetribe'

type Data = {
  success: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  error?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' })
  }

  const { scope, refresh_token } = JSON.parse(req.body.token)

  try {
    const response = await sdk.login({
      client_id: `${process.env.NEXT_PUBLIC_SHARETRIBE_INTEGRATION_CLIENT_ID}`,
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      scope: scope,
    })

    res.status(200).json({ success: true, data: response.data })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error exchanging token:', error)
    res
      .status(500)
      .json({ success: false, error: error.message || 'Internal Server Error' })
  }
}

export default handler
