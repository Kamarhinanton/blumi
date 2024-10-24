import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/utils/types'
import { QueryResultWhatTheySayData } from '@/modules/Home/ui/WhatTheySay/utils/types'

export type QueryResultSignUpCustomerData = {
  home: QueryResultHowItWorksData & QueryResultWhatTheySayData
}
