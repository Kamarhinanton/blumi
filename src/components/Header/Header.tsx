import React, { FC, useEffect } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeaderData } from '@/components/Header/utils/types'

import styles from './Header.module.scss'

type HeaderDataProps = {
  headerData?: QueryResultHeaderData
}

const Header: FC<HeaderDataProps> = ({ headerData }) => {
  useEffect(() => {
    console.log('header', headerData)
  }, [])

  return (
    <header className={styles['header']}>
      <Container>
        <h2>header</h2>
      </Container>
    </header>
  )
}

export default Header
