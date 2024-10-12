import React, { FC, useEffect } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { ComponentHomeWhatTheySay } from '@/gql/graphql'

import styles from './WhatTheySay.module.scss'

type WhatTheyType = {
  whatTheySayData: ComponentHomeWhatTheySay
}

const WhatTheySay: FC<WhatTheyType> = ({ whatTheySayData }) => {
  useEffect(() => {
    console.log(whatTheySayData)
  }, [whatTheySayData])

  return (
    <section className={styles['whatTheySay']}>
      <Container>
        <h1>hello</h1>
      </Container>
    </section>
  )
}

export default WhatTheySay
