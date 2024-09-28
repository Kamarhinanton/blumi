import { FC, ReactNode } from 'react'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <>{children}</>
}

export default AppLayout
