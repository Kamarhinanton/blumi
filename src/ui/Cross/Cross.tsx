import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './Cross.module.scss'

type CrossType = {
  active?: boolean
  className?: string
  toggleBurger?: () => void
}

const Cross: FC<CrossType> = ({ active, className, toggleBurger }) => {
  return (
    <div
      className={classNames(
        styles['cross-wrapper'],
        { [styles['active']]: active },
        className,
      )}
      onClick={toggleBurger}
    >
      <div className={styles['cross']}>
        <span className={styles['cross__line']} />
        <span className={styles['cross__line']} />
        <span className={styles['cross__line']} />
      </div>
    </div>
  )
}

export default Cross
