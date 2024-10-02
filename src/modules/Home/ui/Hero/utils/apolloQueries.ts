import { gql } from '@apollo/client'

export const HeroFragment = gql`
  fragment HeroFields on ComponentHomeHero {
    cta {
      buttonText
      placeholderText
    }
    description
    list {
      item
      id
    }
    listIcons {
      id
      icon {
        url
      }
    }
    picture {
      url
    }
    title
  }
`
