import React from 'react'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'

import styles from './SmallForm.module.scss'

type SmallFormType = {
  placeholderText: string
  buttonText: string
  className?: string
  size?: 'small'
}

const SmallForm = ({
  placeholderText,
  buttonText,
  className,
}: SmallFormType) => {
  return (
    <form action={'#'} className={classNames(styles['form'], className)}>
      <label htmlFor="name" className={styles['form__label']}>
        <input
          id={'name'}
          name={'name'}
          placeholder={placeholderText}
          type="text"
          className={styles['form__label_input']}
        />
      </label>
      <ButtonPrimary className={styles['form__button']}>
        {buttonText}
      </ButtonPrimary>
    </form>
  )
}

export default SmallForm
