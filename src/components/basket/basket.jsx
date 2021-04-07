import React from 'react'
import styles from './basket.module.css';

export const Basket = (props) => {
    const {cartItemCount} = props; 
    return (
        <a href="/basket" className={styles.link}>
            <img src="basket.png" alt="icon basket"></img>
            <div className={styles['quantity-items']}>{cartItemCount}</div>
        </a>
    )
}
