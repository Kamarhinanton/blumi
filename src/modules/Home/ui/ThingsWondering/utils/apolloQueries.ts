import { gql } from '@apollo/client'

export const ThingsWonderingFragment = gql`
  fragment ThingsWonderingFields on ComponentHomeThingsWondering {
    description
    bigTitle {
      text
      id
      icon {
        url
      }
    }
    smallTitle {
      text
      id
      icon {
        url
      }
    }
    subText
    email
    buttonText
    list {
      link
      id
      description
    }
  }
`
