import { Login } from '@/gql/graphql'

export type QueryResultLoginData = {
  login: {
    title?: Login['title']
    metaDescription?: Login['metaDescription']
    metaImage?: Login['metaImage']
  }
}
