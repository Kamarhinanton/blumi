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
        isExternal
      }
      buttonText
      submenu {
        title
        list {
          link
          id
          description
          isExternal
        }
      }
      buttonMobile {
        description
        isExternal
        link
      }
    }
  }
`
