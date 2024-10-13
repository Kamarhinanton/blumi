import React, { FC, ReactNode } from 'react'
import IconDescription from '@/components/IconDescription/IconDescription'
import classNames from 'classnames'
import IconTitle from '@/components/IconTitle/IconTitle'
import { ComponentBaseTitleWithIcons } from '@/gql/graphql'

import styles from './Heading.module.scss'

type HeadingType = {
  description?: string
  titleIcon?: ComponentBaseTitleWithIcons[]
  subText?: string
  children?: ReactNode
  centred?: boolean
  className?: string
  small?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
  titleSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h4 variant'
}

const Heading: FC<HeadingType> = ({
  description,
  titleIcon,
  subText,
  children,
  centred = false,
  className,
  small = false,
  tag = 'h1',
  titleSize = 'h1',
}) => {
  const mods = {
    [styles['centred']]: centred,
    [styles['small']]: small,
  }
  return (
    <div className={classNames(styles['heading'], mods, className)}>
      {description && (
        <IconDescription description={description}>{children}</IconDescription>
      )}
      {titleIcon && (
        <IconTitle
          tag={tag}
          className={styles['heading__title']}
          list={titleIcon}
          titleSize={titleSize}
        />
      )}

      {subText && (
        <p
          className={classNames(styles['heading__subText'], {
            [styles['smallMargin']]: titleSize === 'h4 variant',
          })}
        >
          {subText}
        </p>
      )}
    </div>
  )
}

export default Heading
