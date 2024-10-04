import React, { useEffect } from 'react'
import Hero from '@/modules/Home/ui/Hero/Hero'
import { HomeContentType } from '../../../../pages'
import ExploreTreatment from '@/modules/Home/ui/ExploreTreatment/ExploreTreatment'

const HomeContent = ({ homeData }: HomeContentType) => {
  const { hero, exploreTreatment, howItWorks } = homeData.home

  useEffect(() => {
    console.log('hello', howItWorks)
  }, [])

  return (
    <main>
      <Hero heroData={hero} />
      <ExploreTreatment exploreTreatmentData={exploreTreatment} />
    </main>
  )
}

export default HomeContent
