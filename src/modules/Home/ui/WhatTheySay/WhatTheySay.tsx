import React, { FC } from 'react'
import { ComponentHomeWhatTheySay } from '@/gql/graphql'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import classNames from 'classnames'

import Icon from '../../../../../public/icons/light.svg'

import styles from './WhatTheySay.module.scss'
import 'swiper/css'

type WhatTheyType = {
  whatTheySayData: ComponentHomeWhatTheySay
  reverseDirection: boolean
}

const WhatTheySay: FC<WhatTheyType> = ({
  whatTheySayData,
  reverseDirection = false,
}) => {
  const swiperProps: SwiperProps = {
    speed: 15000,
    loop: true,
    freeMode: true,
    autoplay: { delay: 0, reverseDirection: reverseDirection },
    slidesPerView: 'auto',
    allowTouchMove: false,
    modules: [Autoplay, FreeMode],
  }

  const { title, reviews } = whatTheySayData
  const cleanedData = cleanedTitleWithIcons(title?.titleWithIcons || [])

  return (
    <section className={styles['whatTheySay']}>
      {title && (
        <Heading
          description={title.description || ''}
          titleIcon={cleanedData}
          subText={title.subText || ''}
          tag={'h2'}
          small
          centred
        >
          <Icon />
        </Heading>
      )}
      <Swiper
        {...swiperProps}
        className={classNames(styles['slider'], 'slider-review')}
      >
        {reviews.map(
          (review) =>
            review && (
              <SwiperSlide
                key={review.id}
                className={classNames(styles['slider__slide'], {
                  [styles['reverse']]: !reverseDirection,
                })}
              >
                <BackgroundImage
                  className={styles['slider__slide_icon']}
                  src={review.icon.url}
                  alt={'picture'}
                />
                <div className={styles['slider__slide_card']}>
                  <h4 className={classNames('h4', styles['title-card'])}>
                    {review.title}
                  </h4>
                  <p className={styles['description']}>
                    <small>{review.description}</small>
                  </p>
                  <ul className={styles['image-list']}>
                    {review.images_connection.nodes.map((image) => (
                      <li
                        className={styles['image-list__item']}
                        key={image.documentId}
                      >
                        <BackgroundImage
                          position={'cover'}
                          src={image.url}
                          alt={'image'}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className={styles['author']}>
                    {review.author && (
                      <BackgroundImage
                        src={review.author?.url}
                        alt={'author'}
                        className={styles['author__image']}
                        position={'cover'}
                      />
                    )}
                    <p className={styles['author__description']}>
                      {review.authorName}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </section>
  )
}

export default WhatTheySay
