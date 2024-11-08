import React, { FC, memo } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultFooterData } from '@/components/Footer/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import SmallForm from '@/components/SmallForm/SmallForm'
import routes from '@/utils/routes'

import styles from './Footer.module.scss'

type FooterDataProps = {
  footerData: QueryResultFooterData
}

const Footer: FC<FooterDataProps> = memo(({ footerData }) => {
  const footer = footerData?.footer

  const { logo, cta, columns, copyright, label } = footer

  return (
    <footer className={styles['footer']}>
      <Container>
        <div className={styles['footer__content']}>
          <div className={styles['footer__content_top']}>
            <Link href={routes.public.index} className={styles['logo']}>
              <BackgroundImage src={logo.url} alt={'logo'} />
            </Link>
            <div className={styles['columns']}>
              {columns?.map((column) => (
                <div key={column?.id} className={styles['columns__column']}>
                  <p className={styles['columns__column_title']}>
                    <strong>{column?.title}</strong>
                  </p>
                  <nav className={styles['columns__column_nav']}>
                    {column?.description?.map(
                      (item) =>
                        item?.link && (
                          <Link
                            className={styles['link']}
                            href={
                              item.isExternal
                                ? process.env.NEXT_PUBLIC_EXTERNAL_LINK +
                                  item.link
                                : item.link
                            }
                            key={item?.id}
                          >
                            {item?.description}
                          </Link>
                        ),
                    )}
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
})

export default Footer
