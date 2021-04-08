import React, { useContext } from 'react'
import styles from './basket.module.css';
import cn from 'classnames';
import { CartContext } from '../../App';

export const Basket = () => { 
    const cartItems = useContext(CartContext) 
    const cartItemCount = cartItems && cartItems.length;
    const cartStatus = (cartItemCount < 1);
    return (
        <a href="/basket" className={styles.link}>
            <img src="basket.png" alt="icon basket"></img>
            <div className={cn(cartStatus && styles['is-empty'], styles['quantity-items'])}>{cartItemCount}</div>
        </a>
    )
}
