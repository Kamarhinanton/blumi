import { FC, ReactNode, useEffect } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { setAuthToken } from '@/store/reducers/authTokenSlice'
import { jwtDecode } from 'jwt-decode'

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
    const token = Cookies.get(
      `st-${process.env.NEXT_PUBLIC_SHARETRIBE_INTEGRATION_CLIENT_ID}-token`,
    )

    if (!token) {
      dispatch(setAuthToken(null))
    } else {
      const decoded = jwtDecode(token)
      const currentTime = Math.floor(Date.now() / 1000)

      if (decoded?.exp) {
        // >
        if (decoded.exp > currentTime) {
          dispatch(setAuthToken(token))
        } else {
          fetch('/api/refreshToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ token }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                console.log('Trusted token: ', data.data)
              } else {
                console.error('Error:', data.error)
              }
            })
            .catch((err) => console.error('Request failed:', err))
        }
      }
    }
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
