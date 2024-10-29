import React from 'react'
import { SignUpPartnerType } from '../../../../pages/signUpPartner'
import FAQ from '@/modules/SignUpPartner/ui/FAQ/FAQ'
import HeroSignUp from '@/components/HeroSignUp/HeroSignUp'

const SignUpPartnerContent = ({ signUpPartnerData }: SignUpPartnerType) => {
  const { faq, hero } = signUpPartnerData.signUpPartner

  return (
    <main>
      {hero && <HeroSignUp userType="service-provider" heroData={hero} />}
      {faq && <FAQ faqData={faq} />}
    </main>
  )
}

export default SignUpPartnerContent
