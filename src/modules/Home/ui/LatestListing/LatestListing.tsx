import React from 'react'
import { QueryResultLatestListing } from '@/modules/Home/ui/LatestListing/types'
import Container from '@/app/layouts/layouts/Container'

type LatestListingDataType = {
  latestListingData: QueryResultLatestListing['latestListing']
}

// import styles from './LatestListing.module.scss'

const LatestListing = ({ latestListingData }: LatestListingDataType) => {
  console.log('hello', latestListingData)

  return (
    <section>
      <Container>
        <h1>Hello</h1>
      </Container>
    </section>
  )
}

export default LatestListing
