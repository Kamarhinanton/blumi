import React, { useState } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/utils/types'
import classNames from 'classnames'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Icon from '../../../../../public/icons/search.svg'
import IconDescription from '@/components/IconDescription/IconDescription'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { breakpointMob } from '@/utils/variables'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'

import styles from './ExploreTreatment.module.scss'

type ExploreTreatmentContentType = {
  exploreTreatmentData: QueryResultExploreTreatmentData['exploreTreatment']
}

const ExploreTreatment = ({
  exploreTreatmentData,
}: ExploreTreatmentContentType) => {
  const { heading, buttonText, listImages } = exploreTreatmentData
  const { titleWithIcons, description } = heading
  const [activeIndex, setActiveIndex] = useState<string | null>(
    listImages?.[0]?.id || null,
  )
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

  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])

  return (
    <section className={styles['exploreTreatment']}>
      <Container>
        <div className={styles['exploreTreatment__content']}>
          <div className={styles['title']}>
            {description && (
              <IconDescription
                className={styles['title__description']}
                description={description}
              >
                <Icon />
              </IconDescription>
            )}
            <Heading tag={'h2'} small titleIcon={cleanedData} />
          </div>
          <ul className={styles['list']}>
            {listImages?.map(
              (item) =>
                item && (
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
                        className={classNames(
                          'h4',
                          styles['description__title'],
                        )}
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
                ),
            )}
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
