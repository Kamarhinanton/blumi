import { gql } from '@apollo/client'
import { HeroFragment } from '@/modules/Home/ui/Hero/utils/apolloQueries'
import { ExploreTreatmentFragment } from '@/modules/Home/ui/ExploreTreatment/utils/apolloQueries'

export const HomeData = gql`
  ${HeroFragment}
  ${ExploreTreatmentFragment}
  query {
    home {
      hero {
        ...HeroFields
      }
      exploreTreatment {
        ...ExploreTreatmentFields
      }
    }
  }
`
