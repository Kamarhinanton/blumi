import React from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/types'
import classNames from 'classnames'
import IconDescription from '@/components/IconDescription/IconDescription'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import Icon from '../../../../../public/icons/light.svg'
import IconArrow from '../../../../../public/icons/arrow-pink.svg'

import styles from './HowItWorks.module.scss'
import 'swiper/css'

type HowItWorksType = {
  howItWorksData: QueryResultHowItWorksData['howItWorks']
}

const swiperProps: SwiperProps = {
  slidesPerView: 'auto',
  speed: 1000,
  autoplay: true,
  spaceBetween: 24,
  loop: true,
  modules: [Autoplay, Navigation],
  navigation: {
    prevEl: '.swiper-partner-prev',
    nextEl: '.swiper-partner-next',
  },
}

const HowItWorks = ({ howItWorksData }: HowItWorksType) => {
  if (!howItWorksData) {
    return null
  }

  const { description, title, subText, listSlider } = howItWorksData

  return (
    <section className={styles['howItWorks']}>
      <Container>
        <div className={styles['howItWorks__content']}>
          <div className={styles['howItWorks__content_top']}>
            <IconDescription description={description}>
              <Icon />
            </IconDescription>
            <h2 className={classNames('h1', styles['title'], 'variant')}>
              {title}
            </h2>
            <p className={styles['subText']}>{subText}</p>
          </div>
          <div className={styles['howItWorks__content_bottom']}>
            <Swiper {...swiperProps} className={styles['slider']}>
              {listSlider.map((slide, index) => (
                <SwiperSlide key={slide.id} className={styles['slider__slide']}>
                  <span className={styles['slider__slide_step']}>
                    {`Step ${index + 1}`}
                  </span>
                  <BackgroundImage
                    src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${slide.image.url}`}
                    alt={'picture'}
                    className={styles['slider__slide_image']}
                  />
                  <div className={styles['slider__slide_titleIcon']}>
                    {slide.icon && (
                      <BackgroundImage
                        src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${slide.icon.url}`}
                        alt={'icon'}
                        className={styles['icon']}
                      />
                    )}
                    <h4 className={classNames('h4', styles['title'])}>
                      {slide.title}
                    </h4>
                  </div>
                  <p className={styles['slider__slide_description']}>
                    {slide.description}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={classNames(styles['arrow'], 'swiper-partner-prev')}>
              <IconArrow />
            </div>
            <div
              className={classNames(
                styles['arrow'],
                styles['next'],
                'swiper-partner-next',
              )}
            >
              <IconArrow />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
