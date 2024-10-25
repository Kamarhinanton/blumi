import React, { FC } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultFAQSignUpPartnerData } from '@/modules/SignUpPartner/ui/FAQ/utils/types'
import { cleanedTitleWithIcons } from '@/utils/global'
import Heading from '@/components/Heading/Heading'

import Icon from '../../../../../public/icons/bulb.svg'

import styles from './FAQ.module.scss'
import FAQSection from '@/modules/Home/ui/ThingsWondering/FAQSection/FAQSection'

type FAQType = {
  faqData: QueryResultFAQSignUpPartnerData['faq']
}

const FAQ: FC<FAQType> = ({ faqData }) => {
  const { title, list } = faqData
  const { description, titleWithIcons } = title
  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])

  return (
    <section className={styles['faq']}>
      <Container>
        <Heading
          description={description || ''}
          titleIcon={cleanedData}
          tag={'h2'}
        >
          <Icon />
        </Heading>
        {list && (
          <FAQSection split className={styles['faq__accordion']} data={list} />
        )}
      </Container>
    </section>
  )
}

export default FAQ
