import { gql } from '@apollo/client'

export const SignUpCustomerFragment = gql`
  fragment SignUpCustomerFields on ComponentSignUpHero {
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
      id
      text
      icon {
        url
      }
    }
  }
`
