import React, { FC, ReactNode } from 'react'
import IconDescription from '@/components/IconDescription/IconDescription'
import classNames from 'classnames'
import IconTitle, { IconTitleType } from '@/components/IconTitle/IconTitle'

import styles from './Heading.module.scss'

type HeadingType = IconTitleType & {
  description?: string
  subText?: string
  children?: ReactNode
  centred?: boolean
  small?: boolean
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
          titleIcon={titleIcon}
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
