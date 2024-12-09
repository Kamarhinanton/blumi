import React, { FC } from 'react'
import { Header } from '@/gql/graphql'
import Link from 'next/link'
import classNames from 'classnames'
import Container from '@/app/layouts/layouts/Container'
import { defaultProfileLinks } from '@/components/HeaderSubmenu/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { deleteCookie, tokenKey } from '@/utils/global'
import { setIsAuthorized } from '@/store/reducers/authTokenSlice'
import { useRouter } from 'next/router'
import routes from '@/utils/routes'
import { setIsMenuActive } from '@/store/reducers/callMenuSlice'
import Cross from '@/ui/Cross/Cross'

import styles from './headerSubmenu.module.scss'

type SubmenuType = {
  submenu: Header['submenu']
  link: Header['link']
  className: string
  active?: boolean
  toggleBurger?: () => void
}

const HeaderSubmenu: FC<SubmenuType> = ({
  submenu,
  link,
  active,
  className,
  toggleBurger,
}) => {
  const router = useRouter()

  const isAuthorized = useSelector(
    (state: RootState) => state.authToken.isAuthorized,
  )

  const dispatch: AppDispatch = useDispatch()

  const handleLogOut = async () => {
    try {
      const response = await fetch('/api/logoutUser', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      dispatch(setIsMenuActive(false))
      dispatch(setIsAuthorized(false))
      deleteCookie(tokenKey)

      if (!response.ok) {
        throw new Error('Failed to log out on server')
      }

      await router.push(routes.public.login)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div
      className={classNames(styles['submenu'], { [styles['active']]: active })}
    >
      <Container className={styles['container']}>
        <div onClick={toggleBurger} className={styles['clickArea']} />
        <div className={classNames(styles['menu'], className)}>
          <Cross
            toggleBurger={toggleBurger}
            className={styles['submenu-cross']}
            active={true}
          />
          <p className={styles['menu__title']}>Menu</p>
          {isAuthorized ? (
            // Default profile links
            <>
              <div
                className={classNames(styles['list'], styles['defaultLinks'])}
              >
                <ul className={styles['list-inner']}>
                  {defaultProfileLinks?.map(
                    (item) =>
                      item && (
                        <li
                          className={styles['list-inner__item']}
                          key={`link-${item.id}`}
                        >
                          <BackgroundImage
                            className={styles['list-inner__item_icon']}
                            src={item.iconSrc}
                            alt={'icon'}
                          />
                          <Link
                            className={styles['list-inner__item_link']}
                            href={
                              item.isExternal
                                ? process.env.NEXT_PUBLIC_EXTERNAL_LINK +
                                  item.link
                                : item.link
                            }
                          >
                            {item.description}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              </div>
              <div className={styles['list']}>
                <p
                  className={classNames(
                    styles['list__title'],
                    styles['linkOut'],
                  )}
                  onClick={handleLogOut}
                >
                  Log out
                </p>
              </div>
            </>
          ) : (
            // End default profile links
            <>
              <div className={classNames(styles['list'], 'mobile-view')}>
                <ul className={styles['list-inner']}>
                  {link?.map(
                    (item) =>
                      item && (
                        <li
                          className={styles['list-inner__item']}
                          key={`link-${item.id}`}
                        >
                          <Link
                            className={styles['list-inner__item_link']}
                            href={
                              item.isExternal
                                ? process.env.NEXT_PUBLIC_EXTERNAL_LINK +
                                  item.link
                                : item.link
                            }
                          >
                            {item.description}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              </div>
              {submenu?.map(
                (menu, index) =>
                  menu && (
                    <div
                      className={styles['list']}
                      key={`menu-${menu.id || index}`}
                    >
                      {menu.title && (
                        <p className={styles['list__title']}>{menu.title}</p>
                      )}
                      <ul className={styles['list-inner']}>
                        {menu.list &&
                          menu.list.map(
                            (item, itemIndex) =>
                              item && (
                                <li
                                  className={styles['list-inner__item']}
                                  key={`inner-${item.id || itemIndex}`}
                                >
                                  <Link
                                    className={styles['list-inner__item_link']}
                                    href={
                                      item.isExternal
                                        ? process.env
                                            .NEXT_PUBLIC_EXTERNAL_LINK +
                                          item.link
                                        : item.link
                                    }
                                  >
                                    {item.description}
                                  </Link>
                                </li>
                              ),
                          )}
                      </ul>
                    </div>
                  ),
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default HeaderSubmenu
