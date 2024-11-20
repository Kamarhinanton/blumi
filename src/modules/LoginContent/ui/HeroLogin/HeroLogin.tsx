import React from 'react'
import Heading from '@/components/Heading/Heading'
import Container from '@/app/layouts/layouts/Container'
import BodyForm from '@/modules/LoginContent/ui/HeroLogin/BodyForm/BodyForm'

import styles from './HeroLogin.module.scss'

const HeroLogin = () => {
  return (
    <section className={styles['heroLogin']}>
      <Container>
        <div className={styles['heroLogin__content']}>
          <div className={styles['form']}>
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
