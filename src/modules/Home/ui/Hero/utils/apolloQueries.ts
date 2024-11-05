import { gql } from '@apollo/client'

export const HeroFragment = gql`
  fragment HeroFields on ComponentHomeHero {
    heading {
      description
      subText
      titleWithIcons {
        id
        text
        icon {
          url
        }
      }
    }
    cta {
      buttonText
      placeholderText
    }
    list {
      item
      id
    }
    listIcons {
      id
      icon {
        url
      }
      text
      href
    }
    picture {
      url
    }
  }
`
