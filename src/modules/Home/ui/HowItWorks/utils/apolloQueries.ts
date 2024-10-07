import { gql } from '@apollo/client'

export const HowItWorksFragment = gql`
  fragment HowItWorksFields on ComponentHomeHowItWorks {
    heading {
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
    listSlider {
      image {
        url
      }
      icon {
        url
      }
      title
      description
      id
    }
  }
`
