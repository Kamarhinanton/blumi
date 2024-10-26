import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/utils/types'
import { QueryResultWhatTheySayData } from '@/modules/Home/ui/WhatTheySay/utils/types'
import { QueryResultHeroSignUpCustomerData } from '@/modules/SignUpCustomer/ui/Hero/utils/types'

export type QueryResultSignUpCustomerData = {
  home: QueryResultHowItWorksData & QueryResultWhatTheySayData
  signUpModel: QueryResultHeroSignUpCustomerData
}