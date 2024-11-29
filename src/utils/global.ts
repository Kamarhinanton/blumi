import { ComponentBaseTitleWithIcons } from '@/gql/graphql'
import Cookie from 'js-cookie'
import Cookies from 'js-cookie'
import { AuthResponseType } from '@/utils/handleTypes'
import { jwtDecode } from 'jwt-decode'

export const tokenKey = `st-${process.env.NEXT_PUBLIC_SHARETRIBE_INTEGRATION_CLIENT_ID}-token`

export const cleanedTitleWithIcons = (
  titleWithIcons: (ComponentBaseTitleWithIcons | null)[] = [],
) =>
  titleWithIcons.filter(
    (item): item is ComponentBaseTitleWithIcons => item !== null,
  )

export const setCookie = (data: AuthResponseType, tokenKey: string) => {
  Cookie.set(tokenKey, JSON.stringify(data), {
    expires: 1,
    domain:
      process.env.NODE_ENV === 'production' ? '.modelmatch.co.uk' : undefined,
  })
}

export const deleteCookie = (tokenKey: string) => {
  Cookie.remove(tokenKey)
}

export const getCookie = (tokenKey: string) => Cookies.get(tokenKey)

export const tokenExpired = (token: string) => {
  const decoded = jwtDecode(JSON.parse(token).access_token)
  const currentTime = Math.floor(Date.now() / 1000)
  // <
  return decoded.exp && decoded.exp - 60 < currentTime
}
