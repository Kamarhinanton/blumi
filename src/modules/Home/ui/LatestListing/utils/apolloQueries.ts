import { gql } from '@apollo/client'

export const LatestListingFragment = gql`
  fragment LatestListingFields on ComponentHomeLatestListing {
    title {
      description
      titleIcon {
        icon1 {
          url
        }
        icon2 {
          url
        }
        text1
        text2
        text3
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
