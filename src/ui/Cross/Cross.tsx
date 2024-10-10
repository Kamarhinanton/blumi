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
        styles['cross'],
        { [styles['active']]: active },
        className,
      )}
      onClick={toggleBurger}
    >
      <span className={styles['cross__line']} />
      <span className={styles['cross__line']} />
      <span className={styles['cross__line']} />
    </div>
  )
}

export default Cross
