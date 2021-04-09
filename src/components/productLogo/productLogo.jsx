import React from 'react'
import styles from './productLogo.module.css'

export const ProductLogo = props => {
  const { imageHref } = props
  return (
    <figure className={styles['img-container']}>
      <img className={styles.image} src={imageHref} alt='product'></img>
    </figure>
  )
}
