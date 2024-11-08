import { gql } from '@apollo/client'

export const ExploreTreatmentFragment = gql`
  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {
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
    listImages {
      description
      id
      title
      href
      isExternal
      image {
        url
      }
    }
    buttonBottom {
      description
      link
      isExternal
    }
  }
`
