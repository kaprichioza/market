import React from 'react'
import { DescriptionCardItem } from '../descriptionCardItem/descriptionCardItem'
import { Price } from '../price/price'
import styles from './orderDetails.module.css'

export const OrderDetails = props => {
  const { cartItems, onCartItemToggle, onToggleAll, onRemoveFromCart } = props
  const cartItemCount = cartItems.length
  const selectedItems = cartItems
    .filter(item => item.isSelected)
    .map(item => item.id)
  const isSelectAllChecks =
    cartItemCount > 0 && cartItemCount === selectedItems.length
  return (
    <section className={styles.wrapper}>
      <table className={styles.table} cellSpacing='0' cellPadding='0'>
        <thead>
          <tr className={styles['table-head']}>
            <th align='left'>
              <input
                onChange={() => onToggleAll(!isSelectAllChecks)}
                checked={isSelectAllChecks}
                type='checkbox'
              ></input>
            </th>
            <th align='left' colSpan='2'>
              <button className={styles['select-all-button']}>
                Выбрать все
              </button>
            </th>
            <th align='right'>
              <button
                onClick={() => {
                  onRemoveFromCart(selectedItems)
                }}
                className={styles['remove-button']}
              >
                Удалить выбранные
              </button>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {cartItems.map(({ id, preview, price, description, isSelected }) => (
            <tr key={id}>
              <td>
                <input
                  onChange={() => onCartItemToggle(id)}
                  checked={isSelected}
                  type='checkbox'
                ></input>
              </td>
              <td>
                <img
                  src={preview}
                  className={styles.image}
                  height='80px'
                  alt='preview item'
                ></img>
              </td>
              <td>
                <DescriptionCardItem text={description} />
              </td>
              <td align='right'>
                <Price price={price} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
