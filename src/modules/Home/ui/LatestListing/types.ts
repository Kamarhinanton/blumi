export type QueryResultLatestListing = {
  latestListing: {
    title: {
      description: string
      titleWithIcons: LatestListingTitleIcon[]
      subText: string
    }
    listCities: LatestListingCity[]
    listSlider: LatestListingSliderItem[]
    buttonText: string
  }
}

export type LatestListingTitleIcon = {
  id?: string
  text?: string
  icon: {
    url?: string
  }
}

export type LatestListingCity = {
  id: string
  title: string
  link: string
}

export type LatestListingSliderItem = {
  id: string
  title: string
  description: string
  image: {
    url: string
  }
}
