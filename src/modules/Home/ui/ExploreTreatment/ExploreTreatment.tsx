import React from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/types'
import classNames from 'classnames'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Icon from '../../../../../public/icons/search.svg'
import IconDescription from '@/components/IconDescription/IconDescription'

import styles from './ExploreTreatment.module.scss'

type ExploreTreatmentContentType = {
  exploreTreatmentData: QueryResultExploreTreatmentData['exploreTreatment']
}

const ExploreTreatment = ({
  exploreTreatmentData,
}: ExploreTreatmentContentType) => {
  if (!exploreTreatmentData) {
    return null
  }

  const { description, title, buttonText, listImages } = exploreTreatmentData
  return (
    <section className={styles['exploreTreatment']}>
      <Container>
        <div className={styles['exploreTreatment__content']}>
          <div className={styles['title']}>
            <IconDescription
              className={styles['title__description']}
              description={description}
            >
              <Icon />
            </IconDescription>
            <h2 className={classNames('h1')}>{title}</h2>
          </div>
          <ul className={styles['list']}>
            {listImages.map((item) => (
              <li className={styles['list__item']} key={item.id}>
                <BackgroundImage
                  className={styles['image']}
                  src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${item.image.url}`}
                  alt={'picture'}
                  position={'cover'}
                />
                <div className={styles['description']}>
                  <h4
                    className={classNames('h4', styles['description__title'])}
                  >
                    {item.title}
                  </h4>
                  <div className={styles['description__bottom']}>
                    <p className={styles['description__bottom_text']}>
                      {item.description}
                    </p>
                    <Link
                      className={styles['description__bottom_link']}
                      href={'/'}
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link className={styles['button']} href={'/'}>
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default ExploreTreatment
