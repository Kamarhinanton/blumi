import sdk from '@/utils/api/createInstanceSharetribe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const {
    firstName,
    lastName,
    email,
    password,
    userType,
    phoneNumber,
    displayName,
    ...userFields
  } = req.body

  const filteredData = Object.fromEntries(
    Object.entries({
      email,
      password,
      firstName,
      lastName,
      displayName,
      publicData: {
        userType,
        ...userFields,
      },
      protectedData: phoneNumber ? { phoneNumber } : undefined,
    }).filter(([, value]) => value !== undefined && value !== ''),
  )

  try {
    await sdk.currentUser.create(filteredData)
    res.status(200).json({ message: 'Account successfully created!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating account' })
  }
}
