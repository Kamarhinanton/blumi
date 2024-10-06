export type QueryResultLatestListing = {
  latestListing: {
    title: {
      description: string
      titleIcon: LatestListingTitleIcon
      subText: string
    }
    listCities: LatestListingCity[]
    listSlider: LatestListingSliderItem[]
    buttonText: string
  }
}

export type LatestListingTitleIcon = {
  icon1?: {
    url: string
  }
  icon2?: {
    url: string
  }
  text1?: string
  text2?: string
  text3?: string
}

export type LatestListingCity = {
  id: string
  title: string
  link: string
}

export type LatestListingSliderItem = {
  title: string
  description: string
  image: {
    url: string
  }
}
