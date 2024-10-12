import { gql } from '@apollo/client'

export const WhatTheySayFragment = gql`
  fragment WhatTheySayFields on ComponentHomeWhatTheySay {
    id
    title {
      description
      subText
      titleWithIcons {
        id
        icon {
          url
        }
        text
      }
    }
    reviews {
      id
      title
      description
      images {
        url
      }
      icon {
        url
      }
      images_connection {
        nodes {
          url
          documentId
        }
      }
      authorName
      author {
        url
      }
    }
  }
`
