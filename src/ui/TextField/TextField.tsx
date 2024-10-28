// import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import React, { ForwardedRef, forwardRef, useState } from 'react'
import classNames from 'classnames'
import ErrorIcon from '../../../public/icons/danger.svg'
import EyeIcon from '../../../public/icons/eye.svg'

import styles from './TextField.module.scss'

type TextFieldType = {
  type?: 'text' | 'email' | 'password'
  element?: 'input' | 'textarea'
  label?: string
  value?: string
  error?: string
  name: string
  // onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  className?: string
  password?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldType>(
  (
    {
      type = 'text',
      element = 'input',
      label,
      error,
      name,
      value,
      placeholder,
      password,
      // onChange,
      className,
    }: TextFieldType,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    // const handleChange = (
    //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //   onChange && onChange(e)
    // }

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    return (
      <label
        className={classNames(
          styles['text-field'],
          error ? styles['__error'] : '',
          className,
        )}
      >
        {element === 'textarea' ? (
          <textarea
            className={classNames(
              styles['text-field__input'],
              styles['textarea'],
            )}
            value={value}
            name={name}
            placeholder={placeholder}
            // onChange={handleChange}
          />
        ) : (
          <input
            className={styles['text-field__input']}
            placeholder={placeholder}
            name={name}
            type={password ? (showPassword ? 'text' : 'password') : type}
            ref={ref}
            value={value}
            // onChange={handleChange}
          />
        )}

        {(label || error) && (
          <p className={styles['text-field__label']}>
            <ErrorIcon />
            {error ? error : label}
          </p>
        )}

        {password && (
          <EyeIcon
            onClick={togglePasswordVisibility}
            className={styles['text-field__passwordIcon']}
          />
        )}
      </label>
    )
  },
)

export default TextField
