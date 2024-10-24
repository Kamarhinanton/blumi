import React, { FC, memo } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultHeaderData } from '@/components/Header/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Link from 'next/link'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import classNames from 'classnames'
import HeaderSubmenu from '@/components/HeaderSubmenu/HeaderSubmenu'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'
import { AppDispatch, RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import usePageScroll from '@/hooks/usePageScroll'
import ButtonSecondary from '@/ui/ButtonSecondary/ButtonSecondary'
import dynamic from 'next/dynamic'

const Cross = dynamic(() => import('@/ui/Cross/Cross'), {
  ssr: false,
})

import styles from './Header.module.scss'

type HeaderDataProps = {
  headerData: QueryResultHeaderData
}

const Header: FC<HeaderDataProps> = memo(({ headerData }) => {
  const scrolled = usePageScroll()
  const dispatch: AppDispatch = useDispatch()
  const isMenuActive = useSelector(
    (state: RootState) => state.callMenu.isMenuActive,
  ) as boolean
  const toggleMenu = () => {
    dispatch(setIsMenuActive(!isMenuActive))
  }

  const mods = {
    [styles['scrolled']]: scrolled,
  }

  const { logo, link, buttonText, submenu } = headerData?.header

  return (
    <>
      <header className={classNames(styles['header'], mods)}>
        <div className={styles['blur']} />
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
            <ButtonSecondary className={styles['buttonSecondary']} href={'/'}>
              Browse treatments
            </ButtonSecondary>
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
})

export default Header
