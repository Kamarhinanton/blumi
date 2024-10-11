import React, { FC } from 'react'
import { Header } from '@/gql/graphql'
import Link from 'next/link'
import classNames from 'classnames'
import Container from '@/app/layouts/layouts/Container'
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
  return (
    <div
      className={classNames(styles['submenu'], { [styles['active']]: active })}
    >
      <Container className={styles['container']}>
        <div className={classNames(styles['menu'], className)}>
          <Cross
            toggleBurger={toggleBurger}
            className={styles['submenu-cross']}
            active={true}
          />
          <p className={styles['menu__title']}>Menu</p>
          <div className={classNames(styles['list'], 'mobile-view')}>
            <ul className={styles['list-inner']}>
              {link?.map(
                (item) =>
                  item && (
                    <li className={styles['list-inner__item']} key={item.id}>
                      <Link
                        className={styles['list-inner__item_link']}
                        href={item.link}
                      >
                        {item.description}
                      </Link>
                    </li>
                  ),
              )}
            </ul>
          </div>
          {submenu?.map(
            (menu) =>
              menu && (
                <div className={styles['list']} key={menu.id}>
                  <p className={styles['list__title']}>{menu.title}</p>
                  <ul className={styles['list-inner']}>
                    {menu.list &&
                      menu.list.map(
                        (item) =>
                          item && (
                            <li
                              className={styles['list-inner__item']}
                              key={item.id}
                            >
                              <Link
                                className={styles['list-inner__item_link']}
                                href={item.link}
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
        </div>
      </Container>
    </div>
  )
}

export default HeaderSubmenu
