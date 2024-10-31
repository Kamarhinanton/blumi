import React from 'react'
import { SignUpPartnerType } from '../../../../pages/signUpPartner'
import FAQ from '@/modules/SignUpPartner/ui/FAQ/FAQ'
import HeroSignUp from '@/components/HeroSignUp/HeroSignUp'

const SignUpPartnerContent = ({
  signUpPartnerData,
  userTypes,
}: SignUpPartnerType) => {
  const { faq, hero } = signUpPartnerData.signUpPartner
  const { userTypes: users } = userTypes.data

  return (
    <main>
      {hero && <HeroSignUp userType={users[0]} heroData={hero} />}
      {faq && <FAQ faqData={faq} />}
    </main>
  )
}

export default SignUpPartnerContent
