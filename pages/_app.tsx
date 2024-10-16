import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'
import AppLayout from '@/app/layouts/layouts/AppLayout'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { QueryResultHeaderData } from '@/components/Header/utils/types'

import '@/app/styles/index.scss'

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
})

const nacelle = localFont({
  src: [
    {
      path: '../public/fonts/Nacelle-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nacelle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nacelle-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nacelle-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
})

type AppPagePropsType = {
  footerData?: QueryResultFooterData
  headerData?: QueryResultHeaderData
}

export default function App({
  Component,
  pageProps,
}: AppProps<AppPagePropsType>) {
  const { footerData, headerData } = pageProps

  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-primary: ${inter.style.fontFamily};
          --font-family-secondary: ${nacelle.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Provider store={store}>
        <AppLayout footerData={footerData} headerData={headerData}>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  )
}
