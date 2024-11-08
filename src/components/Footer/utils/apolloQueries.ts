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
          isExternal
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
