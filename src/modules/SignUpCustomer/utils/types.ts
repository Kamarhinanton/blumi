import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/utils/types'
import { QueryResultWhatTheySayData } from '@/modules/Home/ui/WhatTheySay/utils/types'
import { QueryResultHeroSignUpCustomerData } from '@/modules/SignUpCustomer/ui/HeroSignUp/utils/types'
import { SignUpModel } from '@/gql/graphql'

export type QueryResultSignUpCustomerData = {
  home: QueryResultHowItWorksData & QueryResultWhatTheySayData
  signUpModel: QueryResultHeroSignUpCustomerData & {
    title?: SignUpModel['title']
    metaDescription?: SignUpModel['metaDescription']
    metaImage?: SignUpModel['metaImage']
  }
}
