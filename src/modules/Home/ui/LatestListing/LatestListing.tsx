import React from 'react'
import { QueryResultLatestListing } from '@/modules/Home/ui/LatestListing/types'
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

import Icon from '../../../../../public/icons/light.svg'
import IconArrow from '../../../../../public/icons/arrow-pink.svg'

import styles from './LatestListing.module.scss'

type LatestListingDataType = {
  latestListingData: QueryResultLatestListing['latestListing']
}

const swiperProps: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  modules: [Navigation],
  navigation: {
    prevEl: '.latestListing-prev',
    nextEl: '.latestListing-next',
  },
}

const LatestListing = ({ latestListingData }: LatestListingDataType) => {
  if (!latestListingData) {
    return null
  }

  const { title, listCities, listSlider, buttonText } = latestListingData

  return (
    <section className={styles['latestListing']}>
      <Container>
        <div className={styles['latestListing__content']}>
          <div className={styles['latestListing__content_top']}>
            <Heading
              description={title.description}
              title={title.titleIcon.text1}
              subText={title.subText}
              className={styles['heading']}
            >
              <Icon />
            </Heading>
            <ul className={styles['cityList']}>
              {listCities.map((city) => (
                <li className={styles['cityList__item']} key={city.id}>
                  <Link href={city.link}>{city.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['latestListing__content_bottom']}>
            <Swiper {...swiperProps} className={styles['slider']}>
              {listSlider.map((slide) => (
                <SwiperSlide key={slide.id} className={styles['slider__slide']}>
                  <BackgroundImage
                    className={styles['slider__slide_image']}
                    src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${slide.image.url}`}
                    alt={'picture'}
                    position={'cover'}
                  />
                  <h4
                    className={classNames('h4', styles['slider__slide_title'])}
                  >
                    {slide.title}
                  </h4>
                  <p className={styles['slider__slide_description']}>
                    {slide.description}
                  </p>
                </SwiperSlide>
              ))}
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
