import { gql } from '@apollo/client'

export const SignUpPartnersFragment = gql`
  fragment SignUpPartnersFields on ComponentSignUpHero {
    image {
      url
    }
    list {
      text
      id
      icon {
        url
      }
    }
    titleForm {
      icon {
        url
      }
      id
      text
    }
  }
`
