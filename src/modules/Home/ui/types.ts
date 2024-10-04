import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/types'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/types'
import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/types'

export type QueryResultHomeData = {
  home: QueryResultHeroHomeData &
    QueryResultExploreTreatmentData &
    QueryResultHowItWorksData
}
