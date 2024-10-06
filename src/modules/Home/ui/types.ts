import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/types'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/types'
import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/types'
import { QueryResultLatestListing } from '@/modules/Home/ui/LatestListing/types'

export type QueryResultHomeData = {
  home: QueryResultHeroHomeData &
    QueryResultExploreTreatmentData &
    QueryResultHowItWorksData &
    QueryResultLatestListing
}
