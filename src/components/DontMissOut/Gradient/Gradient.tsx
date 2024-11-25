import React, { FC } from 'react'
import { motion, MotionValue } from 'framer-motion'

import styles from './Gradient.module.scss'

type GradientType = {
  cardMouseX?: MotionValue
  cardMouseY?: MotionValue
}

const Gradient: FC<GradientType> = ({ cardMouseX, cardMouseY }) => {
  return (
    <div className={styles['bg-container']}>
      <div className={styles['gradient-1']} />
      <div className={styles['gradient-2']} />
      <div className={styles['gradient-3']} />
      <div className={styles['gradient-4']} />
      {cardMouseX && cardMouseY && (
        <motion.div
          className={styles['cursor']}
          style={{
            x: cardMouseX,
            y: cardMouseY,
          }}
        />
      )}
    </div>
  )
}

export default Gradient
