import React from 'react'
import { SignUpPartnerType } from '../../../../pages/signUpPartner'
import FAQ from '@/modules/SignUpPartner/ui/FAQ/FAQ'

const SignUpPartnerContent = ({ signUpPartnerData }: SignUpPartnerType) => {
  const { faq } = signUpPartnerData.signUpPartner
  return <main>{faq && <FAQ faqData={faq} />}</main>
}

export default SignUpPartnerContent
