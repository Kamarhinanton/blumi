import React, { FC, useEffect } from 'react'
import { QueryResultDontMissOutData } from '@/components/DontMissOut/utils/types'
import Container from '@/app/layouts/layouts/Container'

import styles from './DontMissOut.module.scss'

type DontMissOutType = {
  dontMissOut: QueryResultDontMissOutData['dontMissOut']
}

const DontMissOut: FC<DontMissOutType> = ({ dontMissOut }) => {
  useEffect(() => {
    console.log(dontMissOut)
  }, [])

  return (
    <section className={styles['dontMissOut']}>
      <Container size={'small'}>
        <h1>hello</h1>
      </Container>
    </section>
  )
}

export default DontMissOut
