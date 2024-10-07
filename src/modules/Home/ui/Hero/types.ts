export type QueryResultHeroHomeData = {
  hero: {
    cta: HeroCTA
    list: HeroListItem[]
    listIcons: HeroListIcon[]
    picture: HeroPicture
    heading: {
      description?: string
      subText?: string
      titleWithIcons?: TitleIconList[]
    }
  }
}
type TitleIconList = {
  id?: string
  text?: string
  icon: {
    url?: string
  }
}

type HeroListItem = {
  item: string
  id: string
}

type HeroListIcon = {
  id: string
  icon: {
    url: string
  }
  text: string
}

type HeroPicture = {
  url: string
}

type HeroCTA = {
  buttonText: string
  placeholderText: string
}
