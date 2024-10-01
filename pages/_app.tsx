import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'
import AppLayout from '@/app/layouts/layouts/AppLayout'

import '@/app/styles/index.scss'

const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
})

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
  ],
  preload: true,
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps.data)
  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-primary: ${inter.style.fontFamily};
          --font-family-secondary: ${nacelle.style.fontFamily};
          --font-family-display: ${generalSans.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
