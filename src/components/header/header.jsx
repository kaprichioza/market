import React from 'react'
import { Basket } from '../basket/basket'
import { MenuNavigation } from '../menuList/menuNavigation'
import { UserAuth } from '../userAuth/userAuth'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href='/' className={styles.logo}>
          <img src='logo.png' alt='ozon logo'></img>
        </a>
        <MenuNavigation />
        <div className={styles['user-navigation-link']}>
          <UserAuth />
          <Basket />
        </div>
      </div>
    </div>
  )
}
