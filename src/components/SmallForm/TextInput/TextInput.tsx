// import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import React, { ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'
// import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'

import styles from './TextInput.module.scss'

type TextFieldType = {
  type?: 'text' | 'email'
  element?: 'input' | 'textarea'
  label?: string
  value?: string
  error?: string
  name: string
  // onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  className?: string
}

const TextInput = forwardRef<HTMLInputElement, TextFieldType>(
  (
    {
      type = 'text',
      element = 'input',
      label,
      error,
      name,
      value,
      placeholder,
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
            type={type}
            ref={ref}
            value={value}
            // onChange={handleChange}
          />
        )}

        {label && <p className={styles['text-field__label']}>{label}</p>}
        {/*{error && <ErrorMessage error={error} />}*/}
      </label>
    )
  },
)

export default TextInput
