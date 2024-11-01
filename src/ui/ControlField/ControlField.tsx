import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'
import { ControllerRenderProps } from 'react-hook-form'

import styles from './ControlField.module.scss'

type CheckboxType = {
  title: string
  onChange: (e: string[] | string) => void
  field?: ControllerRenderProps
  value: string
  type?: 'radio' | 'checkbox'
  name?: string
  watcher?: string | string[]
}

const ControlField = forwardRef<HTMLInputElement, CheckboxType>(
  (
    {
      title,
      watcher,
      onChange,
      field,
      value,
      type = 'checkbox',
      name,
    }: CheckboxType,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const isChecked =
      type === 'checkbox'
        ? Array.isArray(watcher) && watcher.includes(value)
        : watcher === value

    const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
      if (type === 'checkbox' && Array.isArray(watcher)) {
        const newArray = [...watcher]
        const item = value.target?.value

        if (newArray.includes(item)) {
          newArray.splice(newArray.indexOf(item), 1)
        } else {
          newArray.push(item)
        }
        onChange(newArray)
      } else if (type === 'radio') {
        const selectedValue = value.target?.value
        onChange(selectedValue)
      }
    }

    return (
      <label
        className={classNames(
          styles['checkbox'],
          isChecked ? styles['checked'] : '',
        )}
      >
        <input
          value={value}
          onChange={handleChange}
          ref={ref}
          name={name}
          type={type}
          {...field}
        />
        <span className={styles['checkbox__title']}>{title}</span>
      </label>
    )
  },
)

export default ControlField
