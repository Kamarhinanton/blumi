import { setIsAuthorized } from '@/store/reducers/authTokenSlice'
import { setProfile } from '@/store/reducers/profileSlice'
import { AppDispatch } from '@/store/store'
import { SetStateAction, Dispatch } from 'react'

const ERROR_MESSAGES = {
  userFetchFailed: 'Failed to fetch user data, please try again later',
  generalError: 'Something went wrong while fetching user profile',
}

export const fetchProfile = async (
  token: string,
  dispatch: AppDispatch,
  setError?: Dispatch<SetStateAction<{ visible: boolean; message: string }>>,
) => {
  try {
    console.log(token)
    const userResponse = await fetch('/api/showUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (!userResponse.ok) {
      setError?.({ visible: true, message: ERROR_MESSAGES.userFetchFailed })
      dispatch(setIsAuthorized(false))
      return false
    }

    const userResponseData = await userResponse.json()
    const { included, data } = userResponseData.user

    dispatch(
      setProfile({
        profileImage: data.relationships.profileImage.data
          ? included[0].attributes.variants.default.url
          : null,
      }),
    )
    dispatch(setIsAuthorized(true))

    return true
  } catch (error) {
    console.error('Error fetching profile:', error)
    setError?.({ visible: true, message: ERROR_MESSAGES.generalError })
    return false
  }
}
