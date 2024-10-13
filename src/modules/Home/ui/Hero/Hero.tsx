import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import SmallForm from '@/components/SmallForm/SmallForm'
import Icon from '../../../../../public/icons/bulb.svg'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'

import styles from './Hero.module.scss'

type HeroContentType = {
  heroData: QueryResultHeroHomeData['hero']
}

const Hero: FC<HeroContentType> = ({ heroData }) => {
  const { list, picture, listIcons, cta, heading } = heroData
  const { description, titleWithIcons } = heading

  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])

  return (
    <section className={styles['hero']}>
      <Container size={'small'}>
        <div className={styles['hero__content']}>
          <div className={styles['hero__content_smallColumn']}>
            <Heading
              description={description || ''}
              titleIcon={cleanedData}
              tag={'h1'}
            >
              <Icon />
            </Heading>
            <ul className={styles['list']}>
              {list.map(
                (link) =>
                  link && (
                    <li className={styles['list__link']} key={link.id}>
                      {link.item}
                    </li>
                  ),
              )}
            </ul>
          </div>
          <div className={styles['hero__content_largeColumn']}>
            <BackgroundImage
              className={styles['image']}
              src={picture.url}
              alt={'picture'}
              position={'cover'}
            />
            <ul className={styles['list']}>
              {listIcons.map(
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
            <SmallForm
              placeholderText={cta.placeholderText}
              buttonText={cta.buttonText}
              className={styles['form']}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
