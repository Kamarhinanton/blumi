import { gql } from '@apollo/client'

export const HowItWorksFragment = gql`
  fragment HowItWorksFields on ComponentHomeHowItWorks {
    description
    title
    subText
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
