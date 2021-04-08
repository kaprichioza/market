import React from 'react'
import styles from './basket.module.css';
import cn from 'classnames';

export const Basket = (props) => {
    const {cartItemCount} = props; 
    const cartStatus = (cartItemCount < 1);
    return (
        <a href="/basket" className={styles.link}>
            <img src="basket.png" alt="icon basket"></img>
            <div className={cn(cartStatus && styles['is-empty'], styles['quantity-items'])}>{cartItemCount}</div>
        </a>
    )
}
