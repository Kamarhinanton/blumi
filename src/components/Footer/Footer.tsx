import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultFooterData } from '@/components/Footer/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import SmallForm from '@/components/SmallForm/SmallForm'

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
              <SmallForm
                placeholderText={cta.placeholderText}
                buttonText={cta.buttonText}
              />
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
