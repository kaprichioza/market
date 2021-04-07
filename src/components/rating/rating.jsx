import React from 'react'
import styles from './rating.module.css';
import { starsTemplate } from './starsTemplate';

export const Rating = (props) => {
    const { rating, comments } = props;
    return (
        <div className={styles.wrapper}>
            <span className={styles.rating}>
                {starsTemplate(1, rating)}
                {starsTemplate(2, rating)}
                {starsTemplate(3, rating)}
                {starsTemplate(4, rating)}
                {starsTemplate(5, rating)}
            </span>
            <span>
                <a href='#' className={styles.comments}>{comments} отзывов</a>
            </span>
        </div >
    )
}
