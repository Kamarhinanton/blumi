import { FC, ReactNode } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { QueryResultHeaderData } from '@/components/Header/utils/types'

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
  return (
    <>
      {headerData && <Header headerData={headerData} />}
      {children}
      {footerData && <Footer footerData={footerData} />}
    </>
  )
}

export default AppLayout
