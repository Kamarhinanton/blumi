import { gql } from '@apollo/client'
import { SignUpPartnersFragment } from '@/modules/SignUpPartner/ui/Hero/utils/apolloQueries'
import { SignUpPartnersFAQFragment } from '@/modules/SignUpPartner/ui/FAQ/utils/apolloQueries'

export const SignUpPartnerData = gql`
  ${SignUpPartnersFragment}
  ${SignUpPartnersFAQFragment}
  query {
    signUpPartner {
      hero {
        ...SignUpPartnersFields
      }
      faq {
        ...SignUpPartnersFAQFields
      }
    }
  }
`
