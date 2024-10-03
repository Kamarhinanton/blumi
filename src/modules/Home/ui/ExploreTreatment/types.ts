import { type BlocksContent } from '@strapi/blocks-react-renderer'

export type QueryResultExploreTreatmentData = {
  exploreTreatment: {
    description: string
    title: BlocksContent
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
