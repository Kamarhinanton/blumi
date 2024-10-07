export type QueryResultHowItWorksData = {
  howItWorks: {
    heading: {
      description?: string
      subText?: string
      titleWithIcons?: TitleIconList[]
    }
    titleWithIcons?: TitleIconList[]
    listSlider: HowItWorksSliderItem[]
  }
}

type TitleIconList = {
  id?: string
  text?: string
  icon: {
    url?: string
  }
}

type HowItWorksSliderItem = {
  image: {
    url: string
  }
  icon?: {
    url: string
  }
  title: string
  description: string
  id: string
}
