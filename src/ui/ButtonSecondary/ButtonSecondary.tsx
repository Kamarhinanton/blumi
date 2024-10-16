import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './ButtonSecondary.module.scss'

type ButtonSecondaryProps = {
  href?: string
  className?: string
  target?: string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonSecondary: FC<ButtonSecondaryProps> = ({
  href,
  className,
  children,
  target,
  ...buttonProps
}) => {
  return (
    <>
      {!href ? (
        <button
          className={classNames(styles['buttonSecondary'], className)}
          {...buttonProps}
        >
          {children}
        </button>
      ) : (
        <Link
          className={classNames(styles['buttonSecondary'], className)}
          href={href}
          target={target}
        >
          {children}
        </Link>
      )}
    </>
  )
}

export default ButtonSecondary
