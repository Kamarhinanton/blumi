import React from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/types'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import SmallForm from '@/components/SmallForm/SmallForm'

import styles from './Hero.module.scss'

type HeroContentType = {
  heroData: QueryResultHeroHomeData['hero']
}

const Hero = ({ heroData }: HeroContentType) => {
  if (!heroData) {
    return null
  }

  const { description, title, list, picture, listIcons, cta } = heroData

  return (
    <section className={styles['hero']}>
      <Container size={'small'}>
        <div className={styles['hero__content']}>
          <div className={styles['hero__content_smallColumn']}>
            <p className={styles['description']}>{description}</p>
            <h1 className={classNames('h1', styles['title'])}>{title}</h1>
            <ul className={styles['list']}>
              {list.map((link) => (
                <li className={styles['list__link']} key={link.id}>
                  {link.item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['hero__content_largeColumn']}>
            <BackgroundImage
              className={styles['image']}
              src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${picture.url}`}
              alt={'picture'}
              position={'cover'}
            />
            <ul className={styles['list']}>
              {listIcons.map((link) => (
                <li className={styles['list__link']} key={link.id}>
                  <BackgroundImage
                    src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${link.icon.url}`}
                    alt={'icon'}
                    className={styles['list__link_icon']}
                  />
                  {link.text}
                </li>
              ))}
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
