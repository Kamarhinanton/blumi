import React, { FC, useCallback, useEffect, useState } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import HeaderSubmenu from '@/components/HeaderSubmenu/HeaderSubmenu'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'
import Cross from '@/ui/Cross/Cross'
import { AppDispatch, RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Header.module.scss'

type HeaderDataProps = {
  headerData?: QueryResultHeaderData
}

const Header: FC<HeaderDataProps> = ({ headerData }) => {
  const [scrolled, setScrolled] = useState(false)
  const dispatch: AppDispatch = useDispatch()
  const isMenuActive = useSelector(
    (state: RootState) => state.callMenu.isMenuActive,
  ) as boolean
  const toggleMenu = () => {
    dispatch(setIsMenuActive(!isMenuActive))
  }

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const mods = {
    [styles['scrolled']]: scrolled,
  }

  if (!headerData) {
    return null
  }

  const { logo, link, buttonText, submenu } = headerData?.header

  return (
    <>
      <header className={classNames(styles['header'], mods)}>
        <Container className={styles['container']}>
          <div className={styles['header__content']}>
            <Link href={'/'} className={styles['header__content_logo']}>
              <BackgroundImage src={logo.url} alt={'logo'} />
            </Link>
            <nav className={styles['navigation']}>
              {link &&
                link.map(
                  (item) =>
                    item && (
                      <Link
                        className={styles['navigation__link']}
                        key={item.id}
                        href={item.link}
                      >
                        {item.description}
                      </Link>
                    ),
                )}
            </nav>
            <ButtonPrimary
              toggleBurger={toggleMenu}
              activeBurger={isMenuActive}
              icon={'burger'}
              className={styles['button']}
            >
              {buttonText}
            </ButtonPrimary>
            <Cross
              toggleBurger={toggleMenu}
              className={styles['mobile-cross']}
            />
          </div>
        </Container>
      </header>
      <HeaderSubmenu
        active={isMenuActive}
        className={styles['submenu__inner']}
        submenu={submenu}
        toggleBurger={toggleMenu}
        link={link}
      />
    </>
  )
}

export default Header
