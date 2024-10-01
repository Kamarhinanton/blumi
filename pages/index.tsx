import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { FooterData } from '@/components/Footer/utils/apolloQueries'
import { QueryResultFooterData } from '@/components/Footer/types'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blumi</title>
      </Head>
      <main>
        <h1>Welcome to Blumi</h1>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data } = await client.query<QueryResultFooterData>({
      query: FooterData,
    })
    return {
      props: { data },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
    }
  }
}
