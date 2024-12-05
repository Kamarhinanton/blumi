import { QueryResultHeroSignUpPartnerData } from '@/modules/SignUpPartner/ui/HeroSignUp/utils/types'
import { QueryResultFAQSignUpPartnerData } from '@/modules/SignUpPartner/ui/FAQ/utils/types'
import { SignUpPartner } from '@/gql/graphql'

export type QueryResultSignUpPartnerData = {
  signUpPartner: QueryResultHeroSignUpPartnerData &
    QueryResultFAQSignUpPartnerData & {
      title?: SignUpPartner['title']
      metaDescription?: SignUpPartner['metaDescription']
      metaImage?: SignUpPartner['metaImage']
    }
}
