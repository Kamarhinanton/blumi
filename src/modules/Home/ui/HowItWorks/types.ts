export type QueryResultHowItWorksData = {
  howItWorks: {
    description: string
    title: string
    subText: string
    listSlider: HowItWorksSliderItem[]
  }
}

type HowItWorksSliderItem = {
  image: {
    url: string
  }
  icon: {
    url: string
  }
  title: string
  description: string
  id: string
}
