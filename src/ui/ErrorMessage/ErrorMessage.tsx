import React, { FC } from 'react'
import ErrorIcon from '../../../public/icons/danger.svg'

import styles from './ErrorMessage.module.scss'
import classNames from 'classnames'

type ErrorMessageType = {
  label?: string
  error?: string
  className?: string
}

const ErrorMessage: FC<ErrorMessageType> = ({ label, error, className }) => {
  return (
    <>
      {(label || error) && (
        <p
          className={classNames(
            styles['errorMessage'],
            error && styles['__error'],
            className,
          )}
        >
          <ErrorIcon />
          {error ? error : label}
        </p>
      )}
    </>
  )
}

export default ErrorMessage
