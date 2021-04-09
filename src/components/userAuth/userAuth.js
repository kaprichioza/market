import styles from './userAuth.module.css'
import React from 'react'

export const UserAuth = () => {
  return (
    <a href='/' className={styles.link}>
      <img src='user.png' alt='icon profile'></img>
    </a>
  )
}
