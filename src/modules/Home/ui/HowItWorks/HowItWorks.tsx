import React from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHowItWorksData } from '@/modules/Home/ui/HowItWorks/utils/types'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Heading from '@/components/Heading/Heading'
import ArrowSlider from '@/ui/ArrowSlider/ArrowSlider'
import { breakpointMob } from '@/utils/variables'
import { cleanedTitleWithIcons } from '@/utils/global'

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
  loop: true,
  spaceBetween: 10,
  modules: [Autoplay, Navigation],
  navigation: {
    prevEl: '.howItWorks-prev',
    nextEl: '.howItWorks-next',
  },
  breakpoints: {
    [breakpointMob + 1]: {
      spaceBetween: 24,
    },
  },
}

const HowItWorks = ({ howItWorksData }: HowItWorksType) => {
  if (!howItWorksData) {
    return null
  }

  const { heading, listSlider } = howItWorksData
  const { titleWithIcons, description, subText } = heading
  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])

  return (
    <section className={styles['howItWorks']}>
      <Container>
        <div className={styles['howItWorks__content']}>
          <Heading
            centred
            titleIcon={cleanedData}
            description={description || ''}
            subText={subText || ''}
            tag={'h2'}
            small
          >
            <Icon />
          </Heading>
          <div className={styles['howItWorks__content_bottom']}>
            <Swiper {...swiperProps} className={styles['slider']}>
              {listSlider.map(
                (slide, index) =>
                  slide && (
                    <SwiperSlide
                      key={slide.id}
                      className={styles['slider__slide']}
                    >
                      <span className={styles['slider__slide_step']}>
                        {`Step ${index + 1}`}
                      </span>
                      <BackgroundImage
                        src={slide.image.url}
                        alt={'picture'}
                        className={styles['slider__slide_image']}
                      />
                      <div className={styles['slider__slide_titleIcon']}>
                        {slide.icon && (
                          <BackgroundImage
                            src={slide.icon.url}
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
                  ),
              )}
            </Swiper>
            <ArrowSlider
              className={styles['arrow']}
              name={'howItWorks-prev'}
              direction={'prev'}
            >
              <IconArrow />
            </ArrowSlider>
            <ArrowSlider
              className={classNames(styles['arrow'], styles['next'])}
              name={'howItWorks-next'}
              direction={'next'}
            >
              <IconArrow />
            </ArrowSlider>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
