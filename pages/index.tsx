import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { FooterData } from '@/components/Footer/utils/apolloQueries'
import { HomeData } from '@/modules/Home/utils/apolloQueries'
import { HeaderData } from '@/components/Header/utils/apolloQueries'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { QueryResultHomeData } from '@/modules/Home/utils/types'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { HomeContent } from '@/modules/Home'
// import { useEffect } from 'react'

export type HomeContentType = {
  homeData: QueryResultHomeData
}

export default function Home({ homeData }: HomeContentType) {
  // useEffect(() => {
  //   fetch('/api/sharetribe')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data')
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       console.log('API Response:', data)
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error)
  //     })
  // }, [])
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContent homeData={homeData} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data: headerData } = await client.query<QueryResultHeaderData>({
      query: HeaderData,
    })
    const { data: footerData } = await client.query<QueryResultFooterData>({
      query: FooterData,
    })
    const { data: homeData } = await client.query<QueryResultHomeData>({
      query: HomeData,
    })
    return {
      props: { footerData, homeData, headerData },
      revalidate: 10,
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
    }
  }
}
