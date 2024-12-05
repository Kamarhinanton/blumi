import React from 'react'
import { SignUpCustomerType } from '../../../../pages/signup-customer'
import HowItWorks from '@/modules/Home/ui/HowItWorks/HowItWorks'
import Container from '@/app/layouts/layouts/Container'
import WhatTheySay from '@/modules/Home/ui/WhatTheySay/WhatTheySay'
import HeroSignUp from '@/components/HeroSignUp/HeroSignUp'

const SignUpCustomerContent = ({
  signUpCustomerData,
  userTypes,
  userFields,
}: SignUpCustomerType) => {
  const { howItWorks, whatTheySay } = signUpCustomerData.home
  const { hero } = signUpCustomerData.signUpModel
  const { userTypes: types } = userTypes.data
  const { userFields: fields } = userFields.data

  return (
    <main>
      {hero && (
        <HeroSignUp userFields={fields} userType={types[1]} heroData={hero} />
      )}
      {howItWorks && <HowItWorks howItWorksData={howItWorks} />}
      {whatTheySay && (
        <Container size={'small'} className={'bg-pink'}>
          <div className={'bg-pink__wrapper'}>
            {whatTheySay.map((section, index) => (
              <WhatTheySay
                reverseDirection={index % 2 === 0}
                key={section.id}
                whatTheySayData={section}
              />
            ))}
          </div>
        </Container>
      )}
    </main>
  )
}

export default SignUpCustomerContent
