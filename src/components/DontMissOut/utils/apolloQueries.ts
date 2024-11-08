import { gql } from '@apollo/client'

export const BookDontMissOutFragment = gql`
  fragment DontMissOutFields on ComponentBaseDontMissOut {
    title {
      description
      subText
      titleWithIcons {
        text
        id
        icon {
          url
        }
      }
    }
    button {
      description
      link
      isExternal
    }
  }
`
