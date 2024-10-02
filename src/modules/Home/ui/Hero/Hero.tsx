import React, { useEffect } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/types'

type HeroContentType = {
  heroData: QueryResultHeroHomeData['hero']
}

const Hero = ({ heroData }: HeroContentType) => {
  useEffect(() => {
    console.log(heroData)
  }, [])
  return (
    <section>
      <Container>
        <h1>Hello</h1>
      </Container>
    </section>
  )
}

export default Hero
