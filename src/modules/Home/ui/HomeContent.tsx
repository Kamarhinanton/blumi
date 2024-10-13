import React from 'react'
import Hero from '@/modules/Home/ui/Hero/Hero'
import { HomeContentType } from '../../../../pages'
import ExploreTreatment from '@/modules/Home/ui/ExploreTreatment/ExploreTreatment'
import HowItWorks from '@/modules/Home/ui/HowItWorks/HowItWorks'
import LatestListing from '@/modules/Home/ui/LatestListing/LatestListing'
import BookBlumi from '@/modules/Home/ui/BookBlumi/BookBlumi'
import WhatTheySay from '@/modules/Home/ui/WhatTheySay/WhatTheySay'
import Container from '@/app/layouts/layouts/Container'
import ThingsWondering from '@/modules/Home/ui/ThingsWondering/ThingsWondering'
import DontMissOut from '@/components/DontMissOut/DontMissOut'

const HomeContent = ({ homeData }: HomeContentType) => {
  const {
    hero,
    exploreTreatment,
    howItWorks,
    latestListing,
    bookBlumi,
    whatTheySay,
    thingsWondering,
    dontMissOut,
  } = homeData.home

  return (
    <main>
      {hero && <Hero heroData={hero} />}
      {exploreTreatment && (
        <ExploreTreatment exploreTreatmentData={exploreTreatment} />
      )}
      {howItWorks && <HowItWorks howItWorksData={howItWorks} />}
      {latestListing && <LatestListing latestListingData={latestListing} />}
      {bookBlumi && <BookBlumi bookBlumiData={bookBlumi} />}
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
      {thingsWondering && <ThingsWondering thingsWondering={thingsWondering} />}
      {dontMissOut && <DontMissOut dontMissOut={dontMissOut} />}
    </main>
  )
}

export default HomeContent
