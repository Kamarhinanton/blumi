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
import useRouteChange from '@/hooks/useRoutChange'
import routes from '@/utils/routes'

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
  const isAuthorized = useSelector(
    (state: RootState) => state.authToken.isAuthorized,
  )
  const profile = useSelector((state: RootState) => state.userProfile.profile)
  const toggleMenu = () => {
    dispatch(setIsMenuActive(!isMenuActive))
  }

  useRouteChange()

  const mods = {
    [styles['scrolled']]: scrolled,
  }

  const { logo, link, buttonText, submenu, buttonMobile } = headerData?.header

  return (
    <>
      <header className={classNames(styles['header'], mods)}>
        <div className={styles['blur']} />
        <Container className={styles['container']}>
          <div className={styles['header__content']}>
            <Link
              href={routes.public.index}
              className={styles['header__content_logo']}
            >
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
                        href={
                          item.isExternal
                            ? process.env.NEXT_PUBLIC_EXTERNAL_LINK + item.link
                            : item.link
                        }
                      >
                        {item.description}
                      </Link>
                    ),
                )}
            </nav>
            {buttonMobile && (
              <ButtonSecondary
                className={styles['buttonSecondary']}
                href={
                  buttonMobile.isExternal
                    ? process.env.NEXT_PUBLIC_EXTERNAL_LINK + buttonMobile.link
                    : buttonMobile.link
                }
              >
                {buttonMobile.description}
              </ButtonSecondary>
            )}
            <ButtonPrimary
              callback={toggleMenu}
              activeBurger={isMenuActive}
              icon="burger"
              className={styles['button']}
              profileAvatarUrl={isAuthorized ? profile.profileImage : undefined}
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
