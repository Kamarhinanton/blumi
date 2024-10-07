import { gql } from '@apollo/client'

export const LatestListingFragment = gql`
  fragment LatestListingFields on ComponentHomeLatestListing {
    title {
      description
      titleWithIcons {
        id
        text
        icon {
          url
        }
      }
      subText
    }
    listCities {
      id
      title
      link
    }
    listSlider {
      id
      title
      description
      image {
        url
      }
    }
    buttonText
  }
`
