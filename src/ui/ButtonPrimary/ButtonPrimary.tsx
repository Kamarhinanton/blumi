import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './ButtonPrimary.module.scss'

type ButtonPrimaryVariants = 'pink'

type ButtonPrimaryProps = {
  isLoading?: boolean
  href?: string
  className?: string
  variant?: ButtonPrimaryVariants
  target?: string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  isLoading = false,
  href,
  className,
  children,
  variant = 'pink',
  target,
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
    [styles['__loading']]: isLoading,
  }

  return (
    <>
      {!href ? (
        <button
          className={classNames(styles['buttonPrimary'], className, mods)}
          {...buttonProps}
        >
          {children}
          <span />
        </button>
      ) : (
        <Link
          className={classNames(styles['buttonPrimary'], className, mods)}
          href={href}
          target={target}
        >
          {children}
          <span />
        </Link>
      )}
    </>
  )
}

export default ButtonPrimary
