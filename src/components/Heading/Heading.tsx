import React, { ReactNode } from 'react'
import IconDescription from '@/components/IconDescription/IconDescription'
import classNames from 'classnames'

import styles from './Heading.module.scss'

type HeadingType = {
  description?: string
  title?: string
  subText?: string
  children?: ReactNode
  centred?: boolean
  className?: string
}

const Heading = ({
  description,
  title,
  subText,
  children,
  centred = false,
  className,
}: HeadingType) => {
  const mods = {
    [styles['centred']]: centred,
  }
  return (
    <div className={classNames(styles['heading'], mods, className)}>
      {description && (
        <IconDescription description={description}>{children}</IconDescription>
      )}
      {title && (
        <h2 className={classNames('h1', styles['heading__title'], 'variant')}>
          {title}
        </h2>
      )}
      {subText && <p className={styles['heading__subText']}>{subText}</p>}
    </div>
  )
}

export default Heading
