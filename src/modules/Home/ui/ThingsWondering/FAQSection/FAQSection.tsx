import { FC, useState } from 'react'
import Accordion from '@/modules/Home/ui/ThingsWondering/FAQSection/Accordion/Accordion'
import { ComponentBaseList, Maybe } from '@/gql/graphql'
import classNames from 'classnames'

import styles from './FAQSection.module.scss'

type FAQSectionType = {
  data: Array<Maybe<ComponentBaseList>>
  className?: string
  split?: boolean
}

const FAQSection: FC<FAQSectionType> = ({ data, className, split }) => {
  const mods = {
    [styles['split']]: split,
  }
  const [expanded, setExpanded] = useState<false | string>('')

  return (
    <ul className={classNames(className, styles['list'], mods)}>
      {data.map(
        (item) =>
          item && (
            <Accordion
              i={item.id}
              key={item.id}
              description={item.description}
              title={item.link}
              expanded={expanded}
              setExpanded={setExpanded}
              className={styles['list__item']}
            />
          ),
      )}
    </ul>
  )
}

export default FAQSection
