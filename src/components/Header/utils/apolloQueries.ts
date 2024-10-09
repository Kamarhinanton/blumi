import { gql } from '@apollo/client'

export const HeaderData = gql`
  query {
    header {
      logo {
        url
      }
      link {
        id
        description
        link
      }
      buttonText
      submenu {
        title
        list {
          link
          id
          description
        }
      }
    }
  }
`
