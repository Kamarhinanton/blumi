export type QueryResultExploreTreatmentData = {
  exploreTreatment: {
    heading: {
      description?: string
      subText?: string
      titleWithIcons?: TitleIconList[]
    }
    listImages: ImageList[]
    buttonText: string
  }
}

type TitleIconList = {
  id?: string
  text?: string
  icon: {
    url?: string
  }
}

type ImageList = {
  description: string
  id: string
  title: string
  image: {
    url: string
  }
}
