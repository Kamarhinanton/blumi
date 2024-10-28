import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './ButtonSecondary.module.scss'

type ButtonPrimaryVariants = 'pink' | 'transparent'

type ButtonSecondaryProps = {
  href?: string
  className?: string
  target?: string
  variant?: ButtonPrimaryVariants
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonSecondary: FC<ButtonSecondaryProps> = ({
  href,
  className,
  children,
  target,
  variant = 'transparent',
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
  }
  return (
    <>
      {!href ? (
        <button
          className={classNames(styles['buttonSecondary'], className, mods)}
          {...buttonProps}
        >
          {children}
        </button>
      ) : (
        <Link
          className={classNames(styles['buttonSecondary'], className, mods)}
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
