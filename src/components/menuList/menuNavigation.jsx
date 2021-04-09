import React from 'react'
import { Link } from 'react-router-dom'
import styles from './menuNavigation.module.css'

export const MenuNavigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.active}`}>
          <Link to={'/'}>Каталог</Link>
        </li>
        <li className={styles.item}>
          <Link to={'/'}>доставка</Link>
        </li>
        <li className={styles.item}>
          <Link to={'/'}>Оплата</Link>
        </li>
        <li className={styles.item}>
          <Link to={'/'}>Поддержка</Link>
        </li>
      </ul>
    </nav>
  )
}
