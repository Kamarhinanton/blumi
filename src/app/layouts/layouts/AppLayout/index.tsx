import { FC, ReactNode, useEffect } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { AppDispatch } from '@/store/store'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { setAuthToken } from '@/store/reducers/authTokenSlice'

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
      console.log('No token found in cookies')
      dispatch(setAuthToken(null))
    } else {
      dispatch(setAuthToken(token))
      console.log('Token found:', token)
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
