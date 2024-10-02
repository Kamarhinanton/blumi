import React from 'react'
import TextField from '@/ui/TextField/TextField'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'

import styles from './SmallForm.module.scss'

type SmallFormType = {
  placeholderText: string
  buttonText: string
  className?: string
}

const SmallForm = ({
  placeholderText,
  buttonText,
  className,
}: SmallFormType) => {
  return (
    <form action={'#'} className={classNames(styles['form'], className)}>
      <TextField
        className={styles['form__input']}
        name={'name'}
        placeholder={placeholderText}
      />
      <ButtonPrimary className={styles['form__button']}>
        {buttonText}
      </ButtonPrimary>
    </form>
  )
}

export default SmallForm
