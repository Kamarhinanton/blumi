import { FC, ReactNode, useEffect } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import { setIsAuthorized } from '@/store/reducers/authTokenSlice'
import { getCookie, setCookie, tokenExpired, tokenKey } from '@/utils/global'
import { fetchProfile } from '@/utils/api/fetchProfile'

type AppLayoutProps = {
  children: ReactNode
  footerData?: QueryResultFooterData
  headerData?: QueryResultHeaderData
}

const AppLayout: FC<AppLayoutProps> = ({
  children,
  footerData,
  headerData,
}) => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const token = getCookie(tokenKey)

      if (!token) {
        dispatch(setIsAuthorized(false))
        return
      }

      const tokenParse = await JSON.parse(token)

      if (tokenParse.scope === 'public-read') {
        dispatch(setIsAuthorized(false))
        return
      }

      const isExpired = tokenExpired(token)

      if (isExpired) {
        try {
          const response = await fetch('/api/refreshToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ token }),
          })
          const data = await response.json()

          if (data.success) {
            setCookie(data.data, tokenKey)
            await fetchProfile(data.data.access_token, dispatch)

            dispatch(setIsAuthorized(true))
          } else {
            console.error('Error:', data.error)
          }
        } catch (err) {
          console.error('Request failed:', err)
        }
      } else {
        await fetchProfile(tokenParse.access_token, dispatch)
        dispatch(setIsAuthorized(true))
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {headerData && <Header headerData={headerData} />}
      {children}
      {footerData && <Footer footerData={footerData} />}
    </>
  )
}

export default AppLayout
