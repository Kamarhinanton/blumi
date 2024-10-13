import React, { FC } from 'react'
import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './Accordion.module.scss'
import ArrowIcon from '@/ui/ArrowIcon/ArrowIcon'

type AccordionType = {
  i: string
  expanded: boolean | string
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>
  description?: string | TrustedHTML
  title?: string
}

const Accordion: FC<AccordionType> = ({
  i,
  expanded,
  setExpanded,
  title,
  description,
}) => {
  const isOpen = i === expanded

  return (
    <li className={styles['item']}>
      <h4
        className={classNames(styles['item__title'], {
          [styles['active']]: isOpen,
        })}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <ArrowIcon className={styles['item__title_arrow']} active={isOpen} />
        {title}
      </h4>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={i}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0, transition: { delay: 0.1 } },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={styles['item__dropdownMenu']}
          >
            <motion.div
              style={{ overflow: 'hidden' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
            >
              <div className={styles['item__dropdownMenu_description']}>
                {description && (
                  <p
                    className={styles['text']}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Accordion
