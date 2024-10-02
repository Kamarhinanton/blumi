import { gql } from '@apollo/client'
import { HeroFragment } from '@/modules/Home/ui/Hero/utils/apolloQueries'

export const HomeData = gql`
  ${HeroFragment}
  query {
    home {
      hero {
        ...HeroFields
      }
    }
  }
`
