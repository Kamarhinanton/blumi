import React, { FC } from 'react'
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
import { ComponentHomeListSlider, Maybe } from '@/gql/graphql'

import Icon from '../../../../../public/icons/light.svg'
import IconArrow from '../../../../../public/icons/arrow-pink.svg'

import styles from './LatestListing.module.scss'
import 'swiper/css'

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

const LatestListing: FC<LatestListingDataType> = ({ latestListingData }) => {
  const { title, listSlider, buttonBottom } = latestListingData
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
          </div>
          <div className={styles['latestListing__content_bottom']}>
            <Swiper
              {...swiperProps}
              className={classNames(styles['slider'], 'gradient-fade')}
            >
              {listSlider.map((slide) =>
                slide ? (
                  <SwiperSlide
                    key={slide.id}
                    className={styles['slider__slide']}
                  >
                    {slide.href ? (
                      <Link
                        className={styles['slider-link']}
                        href={
                          slide.isExternal
                            ? process.env.NEXT_PUBLIC_EXTERNAL_LINK + slide.href
                            : slide.href
                        }
                      >
                        <SlideContent slide={slide} />
                      </Link>
                    ) : (
                      <SlideContent slide={slide} />
                    )}
                  </SwiperSlide>
                ) : null,
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
          {buttonBottom && (
            <ButtonPrimary
              className={styles['button']}
              href={
                buttonBottom.isExternal
                  ? process.env.NEXT_PUBLIC_EXTERNAL_LINK + buttonBottom.link
                  : buttonBottom.link
              }
            >
              {buttonBottom?.description}
            </ButtonPrimary>
          )}
        </div>
      </Container>
    </section>
  )
}

const SlideContent: FC<{
  slide: Maybe<ComponentHomeListSlider>
}> = ({ slide }) =>
  slide && (
    <>
      <BackgroundImage
        className={styles['slider__slide_image']}
        src={slide.image.url}
        alt={'picture'}
        position={'cover'}
      />
      {(slide.fullPrice || slide.discountPrice) && (
        <div className={styles['price']}>
          {slide.fullPrice && (
            <p className={styles['price__full']}>{slide.fullPrice}</p>
          )}
          {slide.discountPrice && (
            <p className={styles['price__discount']}>{slide.discountPrice}</p>
          )}
        </div>
      )}
      <h4 className={classNames('h4', styles['slider__slide_title'])}>
        {slide.title}
      </h4>
      <p className={styles['slider__slide_description']}>{slide.description}</p>
    </>
  )

export default LatestListing
