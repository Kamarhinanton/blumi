import React, { FC } from 'react'
import classNames from 'classnames'

import SmallArrow from '../../../public/icons/small-arrow.svg'

import styles from './ArrowIcon.module.scss'

type ArrowIconType = {
  className?: string
  active?: boolean
}

const ArrowIcon: FC<ArrowIconType> = ({ className, active }) => {
  return (
    <span
      className={classNames(styles['icon'], className, {
        [styles['active']]: active,
      })}
    >
      <SmallArrow className={styles['icon__img']} />
    </span>
  )
}

export default ArrowIcon
