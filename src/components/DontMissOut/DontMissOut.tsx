import React, { FC } from 'react'
import { QueryResultDontMissOutData } from '@/components/DontMissOut/utils/types'
import Container from '@/app/layouts/layouts/Container'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import Icon from '../../../public/icons/light.svg'

import styles from './DontMissOut.module.scss'

type DontMissOutType = {
  dontMissOut: QueryResultDontMissOutData['dontMissOut']
}

const DontMissOut: FC<DontMissOutType> = ({ dontMissOut }) => {
  const { title, buttonText } = dontMissOut
  const { titleWithIcons, description, subText } = title
  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])

  return (
    <section className={styles['dontMissOut']}>
      <Container size={'small'}>
        <div className={styles['dontMissOut__content']}>
          <div className={styles['bg-container']}>
            <div className={styles['gradient-1']} />
            <div className={styles['gradient-2']} />
            <div className={styles['gradient-3']} />
            <div className={styles['gradient-4']} />
          </div>
          <div className={styles['dontMissOut__content_text']}>
            <Heading
              description={description || ''}
              titleIcon={cleanedData}
              tag={'h2'}
              subText={subText || ''}
              small
              centred
            >
              <Icon />
            </Heading>
            <ButtonPrimary className={styles['button']}>
              {buttonText}
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DontMissOut
