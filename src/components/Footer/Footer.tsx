import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultFooterData } from '@/components/Footer/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import TextField from '@/ui/TextField/TextField'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './Footer.module.scss'

type AppLayoutProps = {
  footerData?: QueryResultFooterData
}

const Footer: FC<AppLayoutProps> = ({ footerData }) => {
  const footer = footerData?.footer

  if (!footer) {
    return null
  }

  const { logo, cta, columns, copyright, label } = footer

  return (
    <footer className={styles['footer']}>
      <Container>
        <div className={styles['footer__content']}>
          <div className={styles['footer__content_top']}>
            <div className={styles['logo']}>
              <BackgroundImage
                src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${logo.url}`}
                alt={'logo'}
              />
            </div>
            <div className={styles['columns']}>
              {columns.map((column) => (
                <div key={column.id} className={styles['columns__column']}>
                  <p className={styles['columns__column_title']}>
                    <strong>{column.title}</strong>
                  </p>
                  <nav className={styles['columns__column_nav']}>
                    {column.description.map((item) => (
                      <Link
                        className={styles['link']}
                        href={item.link}
                        key={item.id}
                      >
                        {item.description}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
            <div className={styles['cta']}>
              <h5 className={'h5'}>{label}</h5>
              <div className={styles['cta__form']}>
                <TextField
                  className={styles['input']}
                  name={'name'}
                  placeholder={cta.placeholderText}
                />
                <ButtonPrimary className={styles['button']}>
                  {cta.buttonText}
                </ButtonPrimary>
              </div>
            </div>
          </div>
          <div className={styles['footer__content_bottom']}>
            <p>{copyright.year}</p>
            <p>{copyright.copyrightText}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
