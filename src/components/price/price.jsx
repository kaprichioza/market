import React from 'react';
import styles from './price.module.css';

export const Price = (props) => {
    const { price, discount = 0 } = props;
    const getOldPrice = () => {
        return formatPrice(price * discount / 100 + price);
    }
    function formatPrice(price) {        
        return (price > 9999.99)
            ? new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUR' }).format(price).replace(/RUR/g, '')
            : new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUR' }).format(price).replace(/[\s(RUR)]/g, '');
    }
    return (
        <span className={styles['price-wrap']}>
            <span className={styles['product-price']}>{formatPrice(price)} ₽</span>
            <s className={styles['old-price']}>{getOldPrice()} ₽</s>
        </span>
    )
}
