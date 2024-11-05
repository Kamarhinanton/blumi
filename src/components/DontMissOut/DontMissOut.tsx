import React, { FC } from 'react'
import { QueryResultDontMissOutData } from '@/components/DontMissOut/utils/types'
import Container from '@/app/layouts/layouts/Container'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import useCardMousePosition from '@/hooks/useCardMousePosition'
import dynamic from 'next/dynamic'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const Gradient = dynamic(
  () => import('@/components/DontMissOut/Gradient/Gradient'),
  {
    ssr: false,
  },
)

import Icon from '../../../public/icons/light.svg'

import styles from './DontMissOut.module.scss'
import { breakpointMob } from '@/utils/variables'
import routes from '@/utils/routes'

type DontMissOutType = {
  dontMissOut: QueryResultDontMissOutData['dontMissOut']
}

const DontMissOut: FC<DontMissOutType> = ({ dontMissOut }) => {
  const { title, buttonText } = dontMissOut
  const { titleWithIcons, description, subText } = title
  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])
  const { ref, cardMouseX, cardMouseY } = useCardMousePosition()
  const { width } = useWindowDimensions()
  return (
    <section className={styles['dontMissOut']}>
      <Container size={'small'}>
        <div ref={ref} className={styles['dontMissOut__content']}>
          {width > breakpointMob && (
            <Gradient cardMouseX={cardMouseX} cardMouseY={cardMouseY} />
          )}
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
            <ButtonPrimary
              href={routes.public.signUpCustomer}
              className={styles['button']}
            >
              {buttonText}
            </ButtonPrimary>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DontMissOut
