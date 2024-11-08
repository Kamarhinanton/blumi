import React from 'react'
import { SignUpCustomerContent } from '@/modules/SignUpCustomer'
import createApolloClient from '@/utils/api/apolloClient'
import { QueryResultSignUpCustomerData } from '@/modules/SignUpCustomer/utils/types'
import { SignUpCustomerData } from '@/modules/SignUpCustomer/utils/apolloQueries'
import Head from 'next/head'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { HeaderData } from '@/components/Header/utils/apolloQueries'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { FooterData } from '@/components/Footer/utils/apolloQueries'
import sdk from '@/utils/api/createInstanceSharetribe'
import {
  QueryResultUserFields,
  QueryResultUserTypes,
} from '@/utils/handleTypes'

export type SignUpCustomerType = {
  signUpCustomerData: QueryResultSignUpCustomerData
  userTypes: QueryResultUserTypes
  userFields: QueryResultUserFields
}

const SignUpCustomer = ({
  signUpCustomerData,
  userTypes,
  userFields,
}: SignUpCustomerType) => {
  return (
    <>
      <Head>
        <title>{signUpCustomerData.signUpModel.title}</title>
      </Head>
      <SignUpCustomerContent
        userTypes={userTypes}
        signUpCustomerData={signUpCustomerData}
        userFields={userFields}
      />
    </>
  )
}

export default SignUpCustomer

export const getStaticProps = async () => {
  try {
    const client = createApolloClient()
    const { data: headerData } = await client.query<QueryResultHeaderData>({
      query: HeaderData,
    })
    const { data: footerData } = await client.query<QueryResultFooterData>({
      query: FooterData,
    })
    const { data: signUpCustomerData } =
      await client.query<QueryResultSignUpCustomerData>({
        query: SignUpCustomerData,
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
        signUpCustomerData,
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
