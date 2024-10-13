import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

type ArrowSliderType = {
  children: ReactNode
  direction: 'next' | 'prev'
  className?: string
  name: string
}

import styles from './ArrowSlider.module.scss'

const ArrowSlider: FC<ArrowSliderType> = ({
  children,
  direction,
  className,
  name,
}) => {
  const mods = {
    [styles['next']]: direction === 'next',
  }
  return (
    <div className={classNames(styles['arrow'], name, className, mods)}>
      {children}
    </div>
  )
}

export default ArrowSlider
