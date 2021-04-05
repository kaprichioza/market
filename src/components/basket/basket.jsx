import React from 'react'
import styles from './basket.module.css';

export const Basket = () => {
    return (
        <a href="/basket" className={styles.link}>
            <img src="basket.png" alt="icon basket"></img>
            <div className={styles['quantity-items']}>2</div>
        </a>
    )
}
