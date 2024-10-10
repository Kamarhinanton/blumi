import React, { FC } from 'react'
import { Header } from '@/gql/graphql'
import Link from 'next/link'
import classNames from 'classnames'
import Container from '@/app/layouts/layouts/Container'

import styles from './headerSubmenu.module.scss'

type SubmenuType = {
  submenu: Header['submenu']
  className: string
  active?: boolean
}

const HeaderSubmenu: FC<SubmenuType> = ({ submenu, active, className }) => {
  return (
    <div
      className={classNames(styles['submenu'], { [styles['active']]: active })}
    >
      <Container className={styles['container']}>
        <div className={classNames(styles['menu'], className)}>
          <p className={styles['menu__title']}>Menu</p>
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
