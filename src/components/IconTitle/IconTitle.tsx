import React, { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { ComponentBaseTitleWithIcons } from '@/gql/graphql'

import styles from './iconTitle.module.scss'

type IconTitleType = {
  list: ComponentBaseTitleWithIcons[]
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
  titleSize?: 'h1' | 'h2' | 'h3' | 'h4'
}

const IconTitle: FC<IconTitleType> = ({
  list,
  className,
  tag = 'h1',
  titleSize = 'h1',
}) => {
  const Tag = tag
  return (
    <Tag className={classNames(`${titleSize}`, styles['title'], className)}>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          {item.text}
          {item.icon?.url && (
            <span
              className={classNames(styles['title__icon'], {
                [styles['small']]: titleSize === 'h4',
              })}
            >
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
