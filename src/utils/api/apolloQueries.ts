import { gql } from '@apollo/client'

export const FooterData = gql`
  query {
    footer {
      logo {
        url
      }
      columns {
        description {
          description
          link
          id
        }
        title
        id
      }
      cta {
        buttonText
        placeholderText
        title
      }
      copyright {
        copyrightText
        year
      }
    }
  }
`
