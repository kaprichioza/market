import styles from './cardProduct.module.css';
import React, { useState } from 'react'
import { ProductLogo } from '../productLogo/productLogo';
import { Price } from '../price/price';
import { DescriptionCardItem } from '../descriptionCardItem/descriptionCardItem';
import { Rating } from '../rating/rating';
import { addToCart } from '../../services/cartApi';
import { Button } from '../button/button';

export const CardProduct = (props) => {
    const { productData: {
        preview, price, discount, rating, comments, description, id
    } } = props;
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    async function add() {
        try {
            await addToCart(id);
            setIsButtonDisabled(true);
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div className={`${discount ? 'is-sale ' : ''}${styles['card-product']}`}>
            <div className={styles['logo-container']}>
                <ProductLogo imageHref={preview} />
                <div className={styles['discount-value']}>{discount ? `-${discount}%` : ''}</div>
            </div>
            <div className={styles['product-info-container']}>
                <Price price={price} discount={discount} />
                <DescriptionCardItem text={description} />
                <Rating rating={rating} comments={comments} />
                <div className={styles['button-container']}>
                    <Button disabled={isButtonDisabled} buttonText='В корзину' type='add-to-card' />
                </div>
            </div>
        </div>
    )
}
