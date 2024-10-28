import { gql } from '@apollo/client'
import { HowItWorksFragment } from '@/modules/Home/ui/HowItWorks/utils/apolloQueries'
import { WhatTheySayFragment } from '@/modules/Home/ui/WhatTheySay/utils/apolloQueries'
import { SignUpCustomerFragment } from '@/components/HeroSignUp/utils/apolloQueries'

export const SignUpCustomerData = gql`
  ${HowItWorksFragment}
  ${WhatTheySayFragment}
  ${SignUpCustomerFragment}
  query {
    home {
      howItWorks {
        ...HowItWorksFields
      }
      whatTheySay {
        ...WhatTheySayFields
      }
    }
    signUpModel {
      hero {
        ...SignUpCustomerFields
      }
    }
  }
`
