import React from 'react';
import styles from './price.module.css';

export const Price = (props) => {
    const { price, discount } = props;
    const getOldPrice = () => {
        return Math.ceil(price * discount / 100 + price);
    }
    return (
        <div className={styles['price-wrap']}>
            <span className={styles['product-price']}>{price} ₽</span>
            <s className={styles['old-price']}>{getOldPrice()}</s>
        </div>
    )
}
