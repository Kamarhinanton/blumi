import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'
import { QueryResultHeroSignUpCustomerData } from '@/modules/SignUpCustomer/ui/HeroSignUp/utils/types'
import BodyForm from '@/components/HeroSignUp/BodyForm/BodyForm'
import { UserField, UserType } from '@/utils/handleTypes'

import styles from './HeroSignUp.module.scss'

type HeroContentType = {
  heroData: QueryResultHeroSignUpCustomerData['hero']
  userType: UserType
  userFields: UserField[]
}

const HeroSignUp: FC<HeroContentType> = ({
  heroData,
  userType,
  userFields,
}) => {
  const { image, list, titleForm } = heroData
  const cleanedDataSmallTitle = cleanedTitleWithIcons(titleForm || [])

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
                titleSize={'h4 variant'}
                className={styles['form__title']}
                centred
              />
              <BodyForm userFields={userFields} userType={userType} />
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

export default HeroSignUp
