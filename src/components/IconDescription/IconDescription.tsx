import React, { ReactNode } from 'react'

import styles from './IconDescription.module.scss'
import classNames from 'classnames'

type IconDescriptionType = {
  description: string
  children: ReactNode
  className?: string
}

const IconDescription = ({
  description,
  children,
  className,
}: IconDescriptionType) => {
  return (
    <div className={classNames(styles['iconDescription'], className)}>
      <div className={styles['iconDescription__icon']}>{children}</div>
      <p className={styles['iconDescription__title']}>{description}</p>
    </div>
  )
}

export default IconDescription
