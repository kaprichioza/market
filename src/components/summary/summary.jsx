import React from 'react'
import { Button } from '../button/button';
import { Price } from '../price/price';
import styles from './summary.module.css';

export const Summary = (props) => {
    const { sum, quantity, onOrderFromCart, selectedItems } = props;
    const getDiscount = () => {
        if (sum < 10000) return 0;
        if (sum < 15000) return 5;
        if (sum < 20000) return 10;
        return 15;
    }
    const discountValue = Math.ceil(sum * getDiscount() / 100);
    const ids = selectedItems.map(item => item.id);
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles['title-order']}><b>Ваш заказ:</b></div>
                <div className={styles['quantity-row']}>
                    <span className={styles.quantity}>{quantity} товара на сумму</span>
                    <span className={styles.sum}><b>{sum} ₽</b></span>
                </div>
                <div className={styles['discount-row']}>
                    <span>Скидка</span>
                    <span className={styles['discount-value']}><b>{discountValue} ₽</b></span>
                </div>
                <div className={`${discountValue ? 'is-sale' : ''} ${styles['total-sum-row']}`}>
                    <span><b>Общая стоимость</b></span>
                    <span><Price price={sum} discount={getDiscount()} /></span>
                </div>
                <div className={styles['order-row']}>
                    <span className={styles['order-description']}>Доступные способы и время доставки можно выбрать при оформлении заказа</span>
                    <div className={styles['button-container']}>
                        <Button action={() => {onOrderFromCart(ids)}} disabled={(quantity < 1)} buttonText='Оформить' type='order' />
                    </div>
                </div>
            </div>
        </section>
    )
}
