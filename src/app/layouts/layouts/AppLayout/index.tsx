import { FC, ReactNode, useEffect } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import { setIsAuthorized } from '@/store/reducers/authTokenSlice'
import { getCookie, setCookie, tokenExpired, tokenKey } from '@/utils/global'

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
    const token = getCookie({ tokenKey })

    if (!token) {
      dispatch(setIsAuthorized(false))
    } else {
      const isExpired = tokenExpired({ token })
      if (isExpired) {
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
              setCookie({ data: data.data, tokenKey })
              dispatch(setIsAuthorized(true))
            } else {
              console.error('Error:', data.error)
            }
          })
          .catch((err) => console.error('Request failed:', err))
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
