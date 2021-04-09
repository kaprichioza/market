import React from 'react'
import styles from './rating.module.css'
import { starsTemplate } from './starsTemplate'

export const Rating = props => {
  const { rating, comments } = props
  return (
    <div className={styles.wrapper}>
      <span className={styles.rating}>
        {[1, 2, 3, 4, 5].map(index => starsTemplate(index, rating))}
      </span>
      <span>
        <a href='/' className={styles.comments}>
          {comments} отзывов
        </a>
      </span>
    </div>
  )
}
