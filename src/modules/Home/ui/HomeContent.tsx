import React from 'react'
import Hero from '@/modules/Home/ui/Hero/Hero'
import { HomeContentType } from '../../../../pages'
import ExploreTreatment from '@/modules/Home/ui/ExploreTreatment/ExploreTreatment'

const HomeContent = ({ homeData }: HomeContentType) => {
  const { hero } = homeData.home
  const { exploreTreatment } = homeData.home
  return (
    <main>
      <Hero heroData={hero} />
      <ExploreTreatment exploreTreatmentData={exploreTreatment} />
    </main>
  )
}

export default HomeContent
