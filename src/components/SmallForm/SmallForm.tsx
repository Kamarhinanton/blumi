import React, { FC, useState } from 'react'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'

import styles from './SmallForm.module.scss'

type SmallFormType = {
  placeholderText: string
  buttonText: string
  className?: string
  size?: 'small'
  onSearch: (e: string) => void
}

const SmallForm: FC<SmallFormType> = ({
  placeholderText,
  buttonText,
  className,
  onSearch,
}) => {
  const [value, setValue] = useState('')

  const handleClick = () => {
    onSearch(value)
    setValue('')
  }

  return (
    <div className={classNames(styles['form'], className)}>
      <label htmlFor="name" className={styles['form__label']}>
        <input
          id={'name'}
          name={'name'}
          placeholder={placeholderText}
          type="text"
          value={value}
          className={styles['form__label_input']}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <ButtonPrimary callback={handleClick} className={styles['form__button']}>
        {buttonText}
      </ButtonPrimary>
    </div>
  )
}

export default SmallForm
