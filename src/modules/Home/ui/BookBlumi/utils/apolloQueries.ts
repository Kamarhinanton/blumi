import { gql } from '@apollo/client'

export const BookBlumiFragment = gql`
  fragment BookBlumiFields on ComponentHomeBookBlumi {
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
    listImages {
      id
      title
      description
      image {
        url
      }
    }
  }
`
