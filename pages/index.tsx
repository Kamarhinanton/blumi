import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { FooterData } from '@/components/Footer/utils/apolloQueries'
import { QueryResultFooterData } from '@/components/Footer/types'
import { HomeContent } from '@/modules/Home'
import { HomeData } from '@/modules/Home/utils/apolloQueries'
import { QueryResultHomeData } from '@/modules/Home/utils/types'

export type HomeContentType = {
  homeData: QueryResultHomeData
}

export default function Home({ homeData }: HomeContentType) {
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
    const { data: footerData } = await client.query<QueryResultFooterData>({
      query: FooterData,
    })
    const { data: homeData } = await client.query<QueryResultHomeData>({
      query: HomeData,
    })
    return {
      props: { footerData, homeData },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
    }
  }
}
