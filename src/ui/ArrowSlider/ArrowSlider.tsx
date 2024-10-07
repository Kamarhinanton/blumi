import React, { ReactNode } from 'react'
import classNames from 'classnames'

type ArrowSliderType = {
  children: ReactNode
  direction: 'next' | 'prev'
  className?: string
  name: string
}

import styles from './ArrowSlider.module.scss'

const ArrowSlider = ({
  children,
  direction,
  className,
  name,
}: ArrowSliderType) => {
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
