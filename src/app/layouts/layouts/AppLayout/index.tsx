import { FC, ReactNode } from 'react'
import Footer from '@/components/Footer/Footer'
import { QueryResultFooterData } from '@/components/Footer/types'

type AppLayoutProps = {
  children: ReactNode
  footerData?: QueryResultFooterData
}

const AppLayout: FC<AppLayoutProps> = ({ children, footerData }) => {
  return (
    <>
      {children}
      <Footer footerData={footerData} />
    </>
  )
}

export default AppLayout
