import React from 'react'
import { DescriptionCardItem } from '../descriptionCardItem/descriptionCardItem';
import { Price } from '../price/price';
import { ProductLogo } from '../productLogo/productLogo';
import styles from './orderDetails.module.css';

export const OrderDetails = (props) => {
    const { cartItems } = props;
    return (
        <section className={styles.wrapper}>
            <table className={styles.table} cellspacing="0" cellpadding="0">
                <thead>
                    <tr className={styles['table-head']}>
                        <th align="left">
                            <input type="checkbox"></input>
                        </th>
                        <th align='left' colspan="2">
                            <button className={styles['select-all-button']}>Выбрать все</button>
                        </th>
                        <th align='right'>
                            <button className={styles['remove-button']}>Удалить выбранные</button>
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {cartItems.map(({ id, preview, price, description }) => (
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>
                                <img src={preview} height="80px" height='80px' alt='preview item'></img>
                            </td>
                            <td>
                                <DescriptionCardItem text={description} />
                            </td>
                            <td align='right'><Price price={price} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
