import React from 'react'
import Heading from '@/components/Heading/Heading'
import Container from '@/app/layouts/layouts/Container'
import BodyForm from '@/modules/Login/ui/HeroLogin/BodyForm/BodyForm'
import dynamic from 'next/dynamic'
import { breakpointMob } from '@/utils/variables'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const Gradient = dynamic(
  () => import('@/components/DontMissOut/Gradient/Gradient'),
  {
    ssr: false,
  },
)

import styles from './HeroLogin.module.scss'

const HeroLogin = () => {
  const { width } = useWindowDimensions()

  return (
    <section className={styles['heroLogin']}>
      <Container>
        <div className={styles['heroLogin__content']}>
          <div className={styles['form']}>
            {width > breakpointMob && <Gradient />}
            <Heading
              titleIcon={[{ id: '1', text: 'Log In' }]}
              tag={'h4'}
              titleSize={'h4 variant'}
              className={styles['form__title']}
              centred
            />
            <BodyForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroLogin
