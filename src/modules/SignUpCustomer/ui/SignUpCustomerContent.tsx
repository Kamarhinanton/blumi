import React from 'react'
import { SignUpCustomerType } from '../../../../pages/signUpCustomer'
import HowItWorks from '@/modules/Home/ui/HowItWorks/HowItWorks'
import Container from '@/app/layouts/layouts/Container'
import WhatTheySay from '@/modules/Home/ui/WhatTheySay/WhatTheySay'
import Hero from '@/modules/SignUpCustomer/ui/Hero/Hero'

const SignUpCustomerContent = ({ signUpCustomerData }: SignUpCustomerType) => {
  const { howItWorks, whatTheySay } = signUpCustomerData.home
  const { hero } = signUpCustomerData.signUpModel

  return (
    <main>
      {hero && <Hero heroData={hero} />}
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
