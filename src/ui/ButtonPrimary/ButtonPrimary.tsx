import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import Cross from '@/ui/Cross/Cross'

import styles from './ButtonPrimary.module.scss'

type ButtonPrimaryVariants = 'pink'

type ButtonPrimaryProps = {
  isLoading?: boolean
  href?: string
  className?: string
  variant?: ButtonPrimaryVariants
  target?: string
  icon?: 'arrow' | 'burger'
  activeBurger?: boolean
  toggleBurger?: () => void
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
  icon = 'arrow',
  activeBurger,
  toggleBurger,
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
    [styles[icon]]: true,
    [styles['__loading']]: isLoading,
  }

  return (
    <>
      {!href ? (
        <button
          className={classNames(styles['buttonPrimary'], className, mods)}
          {...buttonProps}
          onClick={toggleBurger}
        >
          {children}
          {icon === 'arrow' && <div className={styles['icon-wrapper']} />}
          {icon === 'burger' && (
            <div className={styles['icon-wrapper']}>
              <Cross active={activeBurger} />
            </div>
          )}
        </button>
      ) : (
        <Link
          className={classNames(styles['buttonPrimary'], className, mods)}
          href={href}
          target={target}
        >
          {children}
          {icon === 'arrow' && <div className={styles['icon-wrapper']} />}
        </Link>
      )}
    </>
  )
}

export default ButtonPrimary
