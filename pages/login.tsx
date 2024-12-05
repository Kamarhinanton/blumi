import React from 'react'
import createApolloClient from '@/utils/api/apolloClient'
import Head from 'next/head'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { HeaderData } from '@/components/Header/utils/apolloQueries'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { FooterData } from '@/components/Footer/utils/apolloQueries'
import { LoginContent } from '../src/modules/Login'
import { LoginData } from '@/modules/Login/utils/apolloQueries'
import { QueryResultLoginData } from '@/modules/Login/utils/types'

export type LoginType = {
  loginData: QueryResultLoginData
}

const Login = ({ loginData }: LoginType) => {
  return (
    <>
      <Head>
        <title>{loginData.login.title}</title>
        <meta property="og:title" content={loginData.login.title} />
        <meta
          name="description"
          content={
            loginData.login.metaDescription
              ? loginData.login.metaDescription
              : 'description'
          }
        />
        <meta
          property="og:description"
          content={
            loginData.login.metaDescription
              ? loginData.login.metaDescription
              : 'description'
          }
        />
        <meta property="og:image" content={loginData.login.metaImage?.url} />
      </Head>
      <LoginContent />
    </>
  )
}

export default Login

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data: headerData } = await client.query<QueryResultHeaderData>({
      query: HeaderData,
    })
    const { data: footerData } = await client.query<QueryResultFooterData>({
      query: FooterData,
    })
    const { data: loginData } = await client.query<QueryResultLoginData>({
      query: LoginData,
    })
    return {
      props: {
        headerData,
        footerData,
        loginData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
    }
  }
}
