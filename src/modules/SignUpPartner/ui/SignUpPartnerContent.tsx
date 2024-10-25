import React, { useEffect } from 'react'
import { SignUpPartnerType } from '../../../../pages/signUpPartner'

const SignUpPartnerContent = ({ signUpPartnerData }: SignUpPartnerType) => {
  useEffect(() => {
    console.log('partner', signUpPartnerData)
  }, [])
  return (
    <main>
      <h1>hello</h1>
    </main>
  )
}

export default SignUpPartnerContent
