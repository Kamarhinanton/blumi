import React from 'react'
import { QueryResultLatestListing } from '@/modules/Home/ui/LatestListing/utils/types'
import Container from '@/app/layouts/layouts/Container'
import Heading from '@/components/Heading/Heading'
import Link from 'next/link'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperProps } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import classNames from 'classnames'
import ArrowSlider from '@/ui/ArrowSlider/ArrowSlider'
import { breakpointMob } from '@/utils/variables'
import { cleanedTitleWithIcons } from '@/utils/global'

import Icon from '../../../../../public/icons/light.svg'
import IconArrow from '../../../../../public/icons/arrow-pink.svg'

import styles from './LatestListing.module.scss'

type LatestListingDataType = {
  latestListingData: QueryResultLatestListing['latestListing']
}

const swiperProps: SwiperProps = {
  modules: [Navigation],
  slidesPerView: 'auto',
  spaceBetween: 14,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    [breakpointMob + 1]: {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      navigation: {
        prevEl: '.latestListing-prev',
        nextEl: '.latestListing-next',
      },
    },
  },
}

const LatestListing = ({ latestListingData }: LatestListingDataType) => {
  if (!latestListingData) {
    return null
  }

  const { title, listCities, listSlider, buttonText } = latestListingData
  const { description, titleWithIcons, subText } = title

  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])

  return (
    <section className={styles['latestListing']}>
      <Container>
        <div className={styles['latestListing__content']}>
          <div className={styles['latestListing__content_top']}>
            <Heading
              description={description || ''}
              titleIcon={cleanedData}
              subText={subText || ''}
              className={styles['heading']}
              small
              tag={'h2'}
            >
              <Icon />
            </Heading>
            <ul className={styles['cityList']}>
              {listCities.map(
                (city) =>
                  city && (
                    <li className={styles['cityList__item']} key={city.id}>
                      <Link
                        className={styles['cityList__item_link']}
                        href={city.link}
                      >
                        {city.title}
                      </Link>
                    </li>
                  ),
              )}
            </ul>
          </div>
          <div className={styles['latestListing__content_bottom']}>
            <Swiper {...swiperProps} className={styles['slider']}>
              {listSlider.map(
                (slide) =>
                  slide && (
                    <SwiperSlide
                      key={slide.id}
                      className={styles['slider__slide']}
                    >
                      <BackgroundImage
                        className={styles['slider__slide_image']}
                        src={slide.image.url}
                        alt={'picture'}
                        position={'cover'}
                      />
                      <h4
                        className={classNames(
                          'h4',
                          styles['slider__slide_title'],
                        )}
                      >
                        {slide.title}
                      </h4>
                      <p className={styles['slider__slide_description']}>
                        {slide.description}
                      </p>
                    </SwiperSlide>
                  ),
              )}
            </Swiper>
            <ArrowSlider
              className={styles['arrow']}
              name={'latestListing-prev'}
              direction={'prev'}
            >
              <IconArrow />
            </ArrowSlider>
            <ArrowSlider
              className={classNames(styles['arrow'], styles['next'])}
              name={'latestListing-next'}
              direction={'next'}
            >
              <IconArrow />
            </ArrowSlider>
          </div>
          <ButtonPrimary className={styles['button']} href={'/'}>
            {buttonText}
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}

export default LatestListing
