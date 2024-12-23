import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/utils/types'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/utils/types'
import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/utils/types'
import { QueryResultLatestListing } from '@/modules/Home/ui/LatestListing/utils/types'
import { QueryResultBookBlumiData } from '@/modules/Home/ui/BookBlumi/utils/types'
import { QueryResultWhatTheySayData } from '@/modules/Home/ui/WhatTheySay/utils/types'
import { QueryResultThingsWonderingData } from '@/modules/Home/ui/ThingsWondering/utils/types'
import { QueryResultDontMissOutData } from '@/components/DontMissOut/utils/types'
import { Home } from '@/gql/graphql'

export type QueryResultHomeData = {
  home: QueryResultHeroHomeData &
    QueryResultExploreTreatmentData &
    QueryResultHowItWorksData &
    QueryResultLatestListing &
    QueryResultBookBlumiData &
    QueryResultWhatTheySayData &
    QueryResultThingsWonderingData &
    QueryResultDontMissOutData & {
      title?: Home['title']
      metaDescription?: Home['metaDescription']
      metaImage?: Home['metaImage']
    }
}
