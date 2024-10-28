import { QueryResultHeroSignUpPartnerData } from '@/modules/SignUpPartner/ui/HeroSignUp/utils/types'
import { QueryResultFAQSignUpPartnerData } from '@/modules/SignUpPartner/ui/FAQ/utils/types'

export type QueryResultSignUpPartnerData = {
  signUpPartner: QueryResultHeroSignUpPartnerData &
    QueryResultFAQSignUpPartnerData
}
