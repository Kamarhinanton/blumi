import { gql } from '@apollo/client'
import { HeroFragment } from '@/modules/Home/ui/Hero/utils/apolloQueries'
import { ExploreTreatmentFragment } from '@/modules/Home/ui/ExploreTreatment/utils/apolloQueries'
import { HowItWorksFragment } from '@/modules/Home/ui/HowItWorks/utils/apolloQueries'
import { LatestListingFragment } from '@/modules/Home/ui/LatestListing/utils/apolloQueries'
import { BookBlumiFragment } from '@/modules/Home/ui/BookBlumi/utils/apolloQueries'
import { WhatTheySayFragment } from '@/modules/Home/ui/WhatTheySay/utils/apolloQueries'
import { ThingsWonderingFragment } from '@/modules/Home/ui/ThingsWondering/utils/apolloQueries'
import { BookDontMissOutFragment } from '@/components/DontMissOut/utils/apolloQueries'

export const HomeData = gql`
  ${HeroFragment}
  ${ExploreTreatmentFragment}
  ${HowItWorksFragment}
  ${LatestListingFragment}
  ${BookBlumiFragment}
  ${WhatTheySayFragment}
  ${ThingsWonderingFragment}
  ${BookDontMissOutFragment}
  query {
    home {
      hero {
        ...HeroFields
      }
      exploreTreatment {
        ...ExploreTreatmentFields
      }
      howItWorks {
        ...HowItWorksFields
      }
      latestListing {
        ...LatestListingFields
      }
      bookBlumi {
        ...BookBlumiFields
      }
      whatTheySay {
        ...WhatTheySayFields
      }
      thingsWondering {
        ...ThingsWonderingFields
      }
      dontMissOut {
        ...DontMissOutFields
      }
    }
  }
`
