import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/utils/types'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/utils/types'
import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/utils/types'
import { QueryResultLatestListing } from '@/modules/Home/ui/LatestListing/utils/types'

export type QueryResultHomeData = {
  home: QueryResultHeroHomeData &
    QueryResultExploreTreatmentData &
    QueryResultHowItWorksData &
    QueryResultLatestListing
}
