import React, { useState } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/types'
import classNames from 'classnames'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Icon from '../../../../../public/icons/search.svg'
import IconDescription from '@/components/IconDescription/IconDescription'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'

import styles from './ExploreTreatment.module.scss'

type ExploreTreatmentContentType = {
  exploreTreatmentData: QueryResultExploreTreatmentData['exploreTreatment']
}

const ExploreTreatment = ({
  exploreTreatmentData,
}: ExploreTreatmentContentType) => {
  const { description, title, buttonText, listImages } = exploreTreatmentData
  const [activeIndex, setActiveIndex] = useState<string>(listImages[0].id)
  const { width } = useWindowDimensions()

  if (!exploreTreatmentData) {
    return null
  }

  const handleClick = (index: string) => {
    if (width <= breakpointMob) {
      if (index !== activeIndex) {
        setActiveIndex(index)
      }
    }
  }

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
            <h2 className={classNames('h1', 'variant')}>{title}</h2>
          </div>
          <ul className={styles['list']}>
            {listImages.map((item) => (
              <li
                onClick={() => handleClick(item.id)}
                className={classNames(styles['list__item'], {
                  [styles['active']]: item.id === activeIndex,
                })}
                key={item.id}
              >
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
