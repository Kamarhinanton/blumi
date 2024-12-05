import { gql } from '@apollo/client'

export const LoginData = gql`
  query {
    login {
      title
      metaDescription
      metaImage {
        url
      }
    }
  }
`
