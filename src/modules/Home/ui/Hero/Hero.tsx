import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeroHomeData } from '@/modules/Home/ui/Hero/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import SmallForm from '@/components/SmallForm/SmallForm'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Icon from '../../../../../public/icons/bulb.svg'

import styles from './Hero.module.scss'

type HeroContentType = {
  heroData: QueryResultHeroHomeData['hero']
}

const Hero: FC<HeroContentType> = ({ heroData }) => {
  const { list, picture, listIcons, cta, heading } = heroData
  const { description, titleWithIcons } = heading
  const router = useRouter()

  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])

  const handleSearch = async (value: string) => {
    const searchUrl = `https://blumi.co.uk/s?keywords=${encodeURIComponent(value)}`
    await router.push(searchUrl)
  }

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
            <nav className={styles['list']}>
              {listIcons.map(
                (link) =>
                  link &&
                  link.href && (
                    <Link
                      href={link.href}
                      className={styles['list__link']}
                      key={link.id}
                    >
                      <BackgroundImage
                        src={link.icon.url}
                        alt={'icon'}
                        className={styles['list__link_icon']}
                      />
                      {link.text}
                    </Link>
                  ),
              )}
            </nav>
            <SmallForm
              placeholderText={cta.placeholderText}
              buttonText={cta.buttonText}
              className={styles['form']}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
