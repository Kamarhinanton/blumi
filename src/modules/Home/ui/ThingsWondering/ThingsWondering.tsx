import React, { FC, useEffect } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultThingsWonderingData } from '@/modules/Home/ui/ThingsWondering/utils/types'

import styles from './ThingsWondering.module.scss'

type ThingsWonderingType = {
  thingsWondering: QueryResultThingsWonderingData['thingsWondering']
}

const ThingsWondering: FC<ThingsWonderingType> = ({ thingsWondering }) => {
  useEffect(() => {
    console.log(thingsWondering)
  }, [])
  return (
    <section className={styles['thingsWondering']}>
      <Container>
        <h1>hello</h1>
      </Container>
    </section>
  )
}

export default ThingsWondering
