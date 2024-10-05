import React from 'react'
import Hero from '@/modules/Home/ui/Hero/Hero'
import { HomeContentType } from '../../../../pages'
import ExploreTreatment from '@/modules/Home/ui/ExploreTreatment/ExploreTreatment'
import HowItWorks from '@/modules/Home/ui/HowItWorks/HowItWorks'

const HomeContent = ({ homeData }: HomeContentType) => {
  const { hero, exploreTreatment, howItWorks } = homeData.home

  return (
    <main>
      <Hero heroData={hero} />
      <ExploreTreatment exploreTreatmentData={exploreTreatment} />
      <HowItWorks howItWorksData={howItWorks} />
    </main>
  )
}

export default HomeContent
