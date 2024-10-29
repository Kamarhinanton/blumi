import React, { FC, SetStateAction } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

import styles from './FormPopup.module.scss'

type FormPopupType = {
  message: string
  setIsVisible: React.Dispatch<
    SetStateAction<{ visible: boolean; message: string }>
  >
}

const formVariant = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  transition: {
    ease: 'easeInOut',
    duration: 0.3,
  },
}

const FormPopup: FC<FormPopupType> = ({ message, setIsVisible }) => {
  const disablePopUp = () => {
    setIsVisible((prev) => {
      return {
        ...prev,
        visible: false,
      }
    })
  }
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      disablePopUp()
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div {...formVariant} className={styles['form-popup']}>
        <div onClick={handleClick} className={styles['form-popup__wrapper']}>
          <div className={styles['form-popup__wrapper_inner']}>
            <h1 className={classNames(styles['title'], 'h2')}>{message}</h1>
            <ButtonPrimary callback={disablePopUp}>Close</ButtonPrimary>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  )
}

export default FormPopup
