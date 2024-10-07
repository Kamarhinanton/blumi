import React, { ReactNode } from 'react'
import IconDescription from '@/components/IconDescription/IconDescription'
import classNames from 'classnames'
import IconTitle from '@/components/IconTitle/IconTitle'

import styles from './Heading.module.scss'

type HeadingType = {
  description?: string
  titleIcon?: TitleIconList[]
  subText?: string
  children?: ReactNode
  centred?: boolean
  className?: string
  small?: boolean
  tag?: 'h1' | 'h2'
}

export type TitleIconList = {
  id?: string
  text?: string
  icon: {
    url?: string
  }
}

const Heading = ({
  description,
  titleIcon,
  subText,
  children,
  centred = false,
  className,
  small = false,
  tag = 'h1',
}: HeadingType) => {
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
        />
      )}

      {subText && <p className={styles['heading__subText']}>{subText}</p>}
    </div>
  )
}

export default Heading
