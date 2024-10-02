import React from 'react'
import Hero from '@/modules/Home/ui/Hero/Hero'
import { HomeContentType } from '../../../../pages'

const HomeContent = ({ homeData }: HomeContentType) => {
  const { hero } = homeData.home
  return (
    <main>
      <Hero heroData={hero} />
    </main>
  )
}

export default HomeContent
