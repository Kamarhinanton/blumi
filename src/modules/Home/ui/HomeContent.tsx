import React from 'react'
import Hero from '@/modules/Home/ui/Hero/Hero'
import { HomeContentType } from '../../../../pages'
import ExploreTreatment from '@/modules/Home/ui/ExploreTreatment/ExploreTreatment'
import HowItWorks from '@/modules/Home/ui/HowItWorks/HowItWorks'
import LatestListing from '@/modules/Home/ui/LatestListing/LatestListing'
import BookBlumi from '@/modules/Home/ui/BookBlumi/BookBlumi'
import WhatTheySay from '@/modules/Home/ui/WhatTheySay/WhatTheySay'

const HomeContent = ({ homeData }: HomeContentType) => {
  const {
    hero,
    exploreTreatment,
    howItWorks,
    latestListing,
    bookBlumi,
    whatTheySay,
  } = homeData.home

  return (
    <main>
      <Hero heroData={hero} />
      <ExploreTreatment exploreTreatmentData={exploreTreatment} />
      <HowItWorks howItWorksData={howItWorks} />
      <LatestListing latestListingData={latestListing} />
      <BookBlumi bookBlumiData={bookBlumi} />
      {whatTheySay.map((section) => (
        <WhatTheySay key={section.id} whatTheySayData={section} />
      ))}
    </main>
  )
}

export default HomeContent
