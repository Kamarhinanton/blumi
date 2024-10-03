import { gql } from '@apollo/client'

export const ExploreTreatmentFragment = gql`
  fragment ExploreTreatmentFields on ComponentHomeExploreTreatment {
    description
    title
    listImages {
      description
      id
      title
      image {
        url
      }
    }
    buttonText
  }
`
