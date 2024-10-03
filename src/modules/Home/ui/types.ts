import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/types'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/types'

export type QueryResultHomeData = {
  home: QueryResultHeroHomeData & QueryResultExploreTreatmentData
}
