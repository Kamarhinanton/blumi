import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/utils/types'
import { QueryResultWhatTheySayData } from '@/modules/Home/ui/WhatTheySay/utils/types'
import { QueryResultHeroSignUpCustomerData } from '@/components/HeroSignUp/utils/types'

export type QueryResultSignUpCustomerData = {
  home: QueryResultHowItWorksData & QueryResultWhatTheySayData
  signUpModel: QueryResultHeroSignUpCustomerData
}
