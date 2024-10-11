import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultBookBlumiData } from '@/modules/Home/ui/BookBlumi/utils/types'

import styles from './BookBlumi.module.scss'

type BookBlumiType = {
  bookBlumi?: QueryResultBookBlumiData['bookBlumi']
}

const BookBlumi: FC<BookBlumiType> = ({ bookBlumi }) => {
  if (!bookBlumi) {
    return null
  }
  return (
    <section className={styles['bookBlumi']}>
      <Container>
        <h1>Hello</h1>
      </Container>
    </section>
  )
}

export default BookBlumi
