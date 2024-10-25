import React, { FC, useEffect } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeroSignUpCustomerData } from '@/modules/SignUpCustomer/ui/Hero/utils/types'

// import Icon from '../../../../../public/icons/bulb.svg'

import styles from './Hero.module.scss'

type HeroContentType = {
  heroData: QueryResultHeroSignUpCustomerData['hero']
}

const Hero: FC<HeroContentType> = ({ heroData }) => {
  useEffect(() => {
    console.log('customer', heroData)
  }, [])

  return (
    <section className={styles['hero']}>
      <Container size={'small'}>
        <div className={styles['hero__content']}>
          <div className={styles['hero__content_smallColumn']}></div>
          <div className={styles['hero__content_largeColumn']}></div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
