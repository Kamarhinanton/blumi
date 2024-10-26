import React from 'react'
import { SignUpPartnerType } from '../../../../pages/signUpPartner'
import FAQ from '@/modules/SignUpPartner/ui/FAQ/FAQ'
import Hero from '@/modules/SignUpCustomer/ui/Hero/Hero'

const SignUpPartnerContent = ({ signUpPartnerData }: SignUpPartnerType) => {
  const { faq, hero } = signUpPartnerData.signUpPartner

  return (
    <main>
      {hero && <Hero heroData={hero} />}
      {faq && <FAQ faqData={faq} />}
    </main>
  )
}

export default SignUpPartnerContent
