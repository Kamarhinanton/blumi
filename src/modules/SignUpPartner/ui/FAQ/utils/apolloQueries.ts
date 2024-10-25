import { gql } from '@apollo/client'

export const SignUpPartnersFAQFragment = gql`
  fragment SignUpPartnersFAQFields on ComponentSignUpFaq {
    title {
      titleWithIcons {
        id
        icon {
          url
        }
        text
      }
      description
      subText
    }
    list {
      link
      description
      id
    }
  }
`
