import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
  return new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_URL_STRAPI}/graphql`,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
