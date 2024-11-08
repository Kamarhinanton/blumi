import React from 'react'
import createApolloClient from '@/utils/api/apolloClient'
import Head from 'next/head'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { HeaderData } from '@/components/Header/utils/apolloQueries'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { FooterData } from '@/components/Footer/utils/apolloQueries'
import SignUpPartnerContent from '@/modules/SignUpPartner/ui/SignUpPartnerContent'
import { QueryResultSignUpPartnerData } from '@/modules/SignUpPartner/utils/types'
import { SignUpPartnerData } from '@/modules/SignUpPartner/utils/apolloQueries'
import sdk from '@/utils/api/createInstanceSharetribe'
import {
  QueryResultUserFields,
  QueryResultUserTypes,
} from '@/utils/handleTypes'

export type SignUpPartnerType = {
  signUpPartnerData: QueryResultSignUpPartnerData
  userTypes: QueryResultUserTypes
  userFields: QueryResultUserFields
}

const SignUpPartner = ({
  signUpPartnerData,
  userTypes,
  userFields,
}: SignUpPartnerType) => {
  return (
    <>
      <Head>
        <title>{signUpPartnerData.signUpPartner.title}</title>
      </Head>
      <SignUpPartnerContent
        userTypes={userTypes}
        userFields={userFields}
        signUpPartnerData={signUpPartnerData}
      />
    </>
  )
}

export default SignUpPartner

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data: headerData } = await client.query<QueryResultHeaderData>({
      query: HeaderData,
    })
    const { data: footerData } = await client.query<QueryResultFooterData>({
      query: FooterData,
    })
    const { data: signUpPartnerData } =
      await client.query<QueryResultSignUpPartnerData>({
        query: SignUpPartnerData,
      })

    const { data: userTypes } = await sdk.assetByAlias({
      path: 'users/user-types.json',
      alias: 'latest',
    })

    const { data: userFields } = await sdk.assetByAlias({
      path: 'users/user-fields.json',
      alias: 'latest',
    })

    return {
      props: {
        signUpPartnerData,
        headerData,
        footerData,
        userTypes,
        userFields,
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
