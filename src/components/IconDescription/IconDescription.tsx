import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './IconDescription.module.scss'

type IconDescriptionType = {
  description: string
  children: ReactNode
  className?: string
}

const IconDescription: FC<IconDescriptionType> = ({
  description,
  children,
  className,
}) => {
  return (
    <div className={classNames(styles['iconDescription'], className)}>
      <div className={styles['iconDescription__icon']}>{children}</div>
      <p className={styles['iconDescription__title']}>{description}</p>
    </div>
  )
}

export default IconDescription
