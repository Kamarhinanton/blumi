import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './Cross.module.scss'

type CrossType = {
  active?: boolean
}

const Cross: FC<CrossType> = ({ active }) => {
  return (
    <div
      className={classNames(styles['cross'], { [styles['active']]: active })}
    >
      <span className={styles['cross__line']} />
      <span className={styles['cross__line']} />
      <span className={styles['cross__line']} />
    </div>
  )
}

export default Cross
