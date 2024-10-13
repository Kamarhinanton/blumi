import React, { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { ComponentBaseTitleWithIcons } from '@/gql/graphql'

import styles from './iconTitle.module.scss'

type IconTitleType = {
  list: ComponentBaseTitleWithIcons[]
  className?: string
  tag?: 'h1' | 'h2'
}

const IconTitle: FC<IconTitleType> = ({ list, className, tag = 'h1' }) => {
  const Tag = tag
  return (
    <Tag className={classNames('h1', styles['title'], className)}>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          {item.text}
          {item.icon?.url && (
            <span>
              <Image
                src={item.icon.url}
                alt={'icon'}
                fill={true}
                sizes={'100%'}
              />
            </span>
          )}
        </React.Fragment>
      ))}
    </Tag>
  )
}

export default IconTitle
