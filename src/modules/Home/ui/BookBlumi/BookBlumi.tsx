import React, { FC, useState } from 'react'
import Container from '@/app/layouts/layouts/Container'
import { QueryResultBookBlumiData } from '@/modules/Home/ui/BookBlumi/utils/types'
import { cleanedTitleWithIcons } from '@/utils/global'
import Heading from '@/components/Heading/Heading'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

import Icon from '../../../../../public/icons/light.svg'
import SmallArrow from '../../../../../public/icons/small-arrow.svg'

import styles from './BookBlumi.module.scss'

type BookBlumiType = {
  bookBlumi: QueryResultBookBlumiData['bookBlumi']
}

const BookBlumi: FC<BookBlumiType> = ({ bookBlumi }) => {
  const { title, listImages } = bookBlumi
  const { description, titleWithIcons, subText } = title
  const [activeIndex, setActiveIndex] = useState<string | null>(
    listImages?.[0]?.id || null,
  )
  const cleanedData = cleanedTitleWithIcons(titleWithIcons || [])
  if (!bookBlumi) {
    return null
  }

  const handleClick = (index: string) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  }

  return (
    <section className={styles['bookBlumi']}>
      <Container>
        <Heading
          description={description || ''}
          titleIcon={cleanedData}
          subText={subText || ''}
          tag={'h2'}
          centred
        >
          <Icon />
        </Heading>
        <div className={styles['bookBlumi__content']}>
          <ul className={styles['list']}>
            {listImages?.map(
              (item) =>
                item && (
                  <li
                    className={classNames(styles['list__item'], {
                      [styles['active']]: item.id === activeIndex,
                    })}
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                  >
                    <h4 className={'h4'}> {item.title}</h4>
                    <span className={styles['list__item_icon']}>
                      <SmallArrow className={styles['icon']} />
                    </span>
                  </li>
                ),
            )}
          </ul>
          <ul className={styles['list-images']}>
            {listImages?.map(
              (item) =>
                item && (
                  <li
                    className={classNames(styles['list-images__item'], {
                      [styles['active']]: item.id === activeIndex,
                    })}
                    key={item.id}
                  >
                    <BackgroundImage
                      className={styles['image']}
                      src={item.image.url}
                      alt={'image'}
                      position={'cover'}
                    />
                    <p className={styles['description']}>{item.description}</p>
                  </li>
                ),
            )}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default BookBlumi
