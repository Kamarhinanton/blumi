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
      label
      cta {
        buttonText
        placeholderText
      }
      copyright {
        copyrightText
        year
      }
    }
  }
`
