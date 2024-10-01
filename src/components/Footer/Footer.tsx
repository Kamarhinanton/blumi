import React from 'react'
import Container from '@/app/layouts/layouts/Container'
import Logo from '../../../public/icons/logo.svg'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Container>
        <div className={styles['footer__content']}>
          <div className={styles['footer__content_top']}>
            <div className={styles['logo']}>
              <Logo />
            </div>
            <div className={styles['columns']}>
              <div className={styles['columns__column']}></div>
            </div>
          </div>
          <div className={styles['footer__content_bottom']}></div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
