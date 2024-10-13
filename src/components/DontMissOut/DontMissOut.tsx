import React, { FC, useCallback, useEffect, useRef } from 'react'
import { QueryResultDontMissOutData } from '@/components/DontMissOut/utils/types'
import Container from '@/app/layouts/layouts/Container'
import Heading from '@/components/Heading/Heading'
import { cleanedTitleWithIcons } from '@/utils/global'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { breakpointMob } from '@/utils/variables'
import { motion } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import useFramerSpringValue from '@/hooks/useFramerSpringValue'

import Icon from '../../../public/icons/light.svg'

import styles from './DontMissOut.module.scss'

type DontMissOutType = {
  dontMissOut: QueryResultDontMissOutData['dontMissOut']
}

const DontMissOut: FC<DontMissOutType> = ({ dontMissOut }) => {
  const { title, buttonText } = dontMissOut
  const { titleWithIcons, description, subText } = title
  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])
  const [cardMouseX, cardMouseSpringX] = useFramerSpringValue(-500)
  const [cardMouseY, cardMouseSpringY] = useFramerSpringValue(-500)
  const { width } = useWindowDimensions()
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect() as DOMRect
      if (width > breakpointMob && rect) {
        requestAnimationFrame(() => {
          const mouseX = Math.round(event.clientX - rect.left) - 250
          const mouseY = Math.round(event.clientY - rect.top) - 250

          cardMouseX.set(mouseX)
          cardMouseY.set(mouseY)
        })
      }
    },
    [width],
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove, width])

  return (
    <section className={styles['dontMissOut']}>
      <Container size={'small'}>
        <div ref={ref} className={styles['dontMissOut__content']}>
          <div className={styles['bg-container']}>
            <div className={styles['gradient-1']} />
            <div className={styles['gradient-2']} />
            <div className={styles['gradient-3']} />
            <div className={styles['gradient-4']} />
            <motion.div
              className={styles['cursor']}
              style={{
                x: cardMouseSpringX,
                y: cardMouseSpringY,
              }}
            />
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
