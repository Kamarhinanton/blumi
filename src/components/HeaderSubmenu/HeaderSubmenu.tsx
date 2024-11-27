import React, { FC } from 'react'
import { Header } from '@/gql/graphql'
import Link from 'next/link'
import classNames from 'classnames'
import Container from '@/app/layouts/layouts/Container'
import dynamic from 'next/dynamic'
import { defaultProfileLinks } from '@/components/HeaderSubmenu/data'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

const Cross = dynamic(() => import('@/ui/Cross/Cross'), {
  ssr: false,
})

import styles from './headerSubmenu.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

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
  const isAuthorized = useSelector(
    (state: RootState) => state.authToken.isAuthorized,
  )
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
