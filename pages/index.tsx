import Head from 'next/head'
import createApolloClient from '@/utils/api/apolloClient'
import { FooterData } from '@/components/Footer/utils/apolloQueries'
import { QueryResultFooterData } from '@/components/Footer/types'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setFooterData } from '@/store/reducers/footerDataSlice'
import { AppDispatch } from '@/store/store'

type HomeProps = {
  footerData: QueryResultFooterData
}

export default function Home({ footerData }: HomeProps) {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (footerData) {
      dispatch(setFooterData(footerData.footer))
    }
  }, [dispatch, footerData])

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
