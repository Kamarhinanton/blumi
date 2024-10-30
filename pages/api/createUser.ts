import sdk from '@/utils/api/createInstanceSharetribe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { firstName, lastName, email, password, userType } = req.body

  try {
    await sdk.currentUser.create({
      email,
      password,
      firstName,
      lastName,
      publicData: { userType },
    })
    res.status(200).json({ message: 'Account successfully created!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating account' })
  }
  // sdk
  //   .assetByAlias({
  //     path: 'users/user-types.json',
  //     alias: 'latest',
  //   })
  //   .then((response) => {
  //     res.status(200).json(response.data)
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ error: error.message })
  //   })
}
