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
  const { description, title, list, picture, listIcons, cta } = heroData

  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero_content']}>
          <div className={styles['hero_content_column']}>
            <p>{description}</p>
            <h1 className={classNames('h1')}>{title}</h1>
            <ul>
              {list.map((link) => (
                <li key={link.id}>{link.item}</li>
              ))}
            </ul>
          </div>
          <div className={styles['hero_content_column']}>
            <BackgroundImage
              src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${picture.url}`}
              alt={'picture'}
            />
            <ul>
              {listIcons.map((link) => (
                <li key={link.id}>
                  <BackgroundImage
                    src={`${process.env.NEXT_PUBLIC_URL_STRAPI}${link.icon.url}`}
                    alt={'icon'}
                  />
                  <p> {link.text}</p>
                </li>
              ))}
            </ul>
            <SmallForm
              placeholderText={cta.placeholderText}
              buttonText={cta.buttonText}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
