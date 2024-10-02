export type QueryResultHeroHomeData = {
  hero: {
    cta: HeroCTA
    description: string
    list: HeroListItem[]
    listIcons: HeroListIcon[]
    picture: HeroPicture
    title: string
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
}

type HeroPicture = {
  url: string
}

type HeroCTA = {
  buttonText: string
  placeholderText: string
}
