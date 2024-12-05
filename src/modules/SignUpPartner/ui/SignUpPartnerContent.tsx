import React from 'react'
import { SignUpPartnerType } from '../../../../pages/signup-partner'
import FAQ from '@/modules/SignUpPartner/ui/FAQ/FAQ'
import HeroSignUp from '@/components/HeroSignUp/HeroSignUp'

const SignUpPartnerContent = ({
  signUpPartnerData,
  userTypes,
  userFields,
}: SignUpPartnerType) => {
  const { faq, hero } = signUpPartnerData.signUpPartner
  const { userTypes: users } = userTypes.data
  const { userFields: fields } = userFields.data

  return (
    <main>
      {hero && (
        <HeroSignUp userFields={fields} userType={users[0]} heroData={hero} />
      )}
      {faq && <FAQ faqData={faq} />}
    </main>
  )
}

export default SignUpPartnerContent
