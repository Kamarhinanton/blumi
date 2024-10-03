export type QueryResultExploreTreatmentData = {
  exploreTreatment: {
    description: string
    title: string
    listImages: ImageList[]
    buttonText: string
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
