import styles from './cardProduct.module.css';
import React, { useContext } from 'react'
import { ProductLogo } from '../productLogo/productLogo';
import { Price } from '../price/price';
import { DescriptionCardItem } from '../descriptionCardItem/descriptionCardItem';
import { Rating } from '../rating/rating';
import { Button } from '../button/button';
import { CartContext } from '../../App';

export const CardProduct = (props) => {
    const { productData: {
        preview, price, discount, rating, comments, description, id,
    }, onAddToCart } = props;
    const cart = useContext(CartContext);    
    const isButtonDisabled = cart && cart.some((cartItem) => cartItem === String(id));
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
                    <Button action={() => onAddToCart(id)} disabled={isButtonDisabled} buttonText='В корзину' type='add-to-card' />
                </div>
            </div>
        </div>
    )
}
