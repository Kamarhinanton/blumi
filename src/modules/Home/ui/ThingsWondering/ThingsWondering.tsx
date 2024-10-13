import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultThingsWonderingData } from '@/modules/Home/ui/ThingsWondering/utils/types'
import { cleanedTitleWithIcons } from '@/utils/global'
import Heading from '@/components/Heading/Heading'
import Link from 'next/link'
import FAQSection from '@/modules/Home/ui/ThingsWondering/FAQSection/FAQSection'

import Icon from '../../../../../public/icons/light.svg'

import styles from './ThingsWondering.module.scss'

type ThingsWonderingType = {
  thingsWondering: QueryResultThingsWonderingData['thingsWondering']
}

const ThingsWondering: FC<ThingsWonderingType> = ({ thingsWondering }) => {
  const { bigTitle, smallTitle, description, subText, email, list } =
    thingsWondering
  const cleanedDataBigTitle = cleanedTitleWithIcons(bigTitle || [])
  const cleanedDataSmallTitle = cleanedTitleWithIcons(smallTitle || [])

  return (
    <section className={styles['thingsWondering']}>
      <Container>
        <div className={styles['thingsWondering__content']}>
          <div className={styles['thingsWondering__content_text']}>
            <Heading
              description={description || ''}
              titleIcon={cleanedDataBigTitle}
              tag={'h2'}
            >
              <Icon />
            </Heading>
            <FAQSection className={styles['mobile-view']} data={list} />
            <Heading
              subText={subText || ''}
              titleIcon={cleanedDataSmallTitle}
              tag={'h4'}
              titleSize={'h4 variant'}
              className={styles['smallHeading']}
            />
            <Link className={styles['link']} href={`mailto:${email}`}>
              {email}
            </Link>
          </div>
          <div className={styles['thingsWondering__content_list']}>
            <FAQSection className={styles['desk-view']} data={list} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ThingsWondering
