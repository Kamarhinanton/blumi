import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeroSignUpCustomerData } from '@/modules/SignUpCustomer/ui/Hero/utils/types'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'
import useWindowDimensions from '@/hooks/useWindowDimensions'

import styles from './Hero.module.scss'
import { breakpointMob } from '@/utils/variables'

type HeroContentType = {
  heroData: QueryResultHeroSignUpCustomerData['hero']
}

const Hero: FC<HeroContentType> = ({ heroData }) => {
  const { image, list, titleForm } = heroData
  const cleanedDataSmallTitle = cleanedTitleWithIcons(titleForm || [])
  const { width } = useWindowDimensions()

  return (
    <section className={styles['hero']}>
      <Container size={'small'} className={styles['container']}>
        <div className={styles['hero__content']}>
          <div
            className={classNames(
              styles['hero__content_formColumn'],
              styles['column'],
            )}
          >
            <div className={styles['form']}>
              <Heading
                titleIcon={cleanedDataSmallTitle}
                tag={'h4'}
                titleSize={width <= breakpointMob ? 'h5' : 'h4 variant'}
                className={styles['form__title']}
                centred
              />
            </div>
          </div>
          <div
            className={classNames(
              styles['hero__content_imageColumn'],
              styles['column'],
            )}
          >
            <div className={styles['blockImage']}>
              <BackgroundImage
                className={styles['blockImage__image']}
                src={image.url}
                alt={'picture'}
              />
              <ul className={styles['list']}>
                {list?.map(
                  (link) =>
                    link && (
                      <li className={styles['list__link']} key={link.id}>
                        <BackgroundImage
                          src={link.icon.url}
                          alt={'icon'}
                          className={styles['list__link_icon']}
                        />
                        {link.text}
                      </li>
                    ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
