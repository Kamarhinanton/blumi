import React from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultExploreTreatmentData } from '@/modules/Home/ui/ExploreTreatment/types'

type ExploreTreatmentContentType = {
  exploreTreatmentData: QueryResultExploreTreatmentData['exploreTreatment']
}

const ExploreTreatment = ({
  exploreTreatmentData,
}: ExploreTreatmentContentType) => {
  return (
    <section>
      <Container>
        <h1>{exploreTreatmentData.description}</h1>
      </Container>
    </section>
  )
}

export default ExploreTreatment
