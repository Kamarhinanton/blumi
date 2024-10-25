import { gql } from '@apollo/client'

export const SignUpCustomerFragment = gql`
  fragment SignUpCustomerFields on ComponentSignUpHero {
    image {
      url
    }
    list {
      id
      item
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
