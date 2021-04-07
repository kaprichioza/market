import styles from './cardProduct.module.css';
import React from 'react'
import { ProductLogo } from '../productLogo/productLogo';
import { Price } from '../price/price';
import { DescriptionCardItem } from '../descriptionCardItem/descriptionCardItem';
import { Rating } from '../rating/rating';

export const CardProduct = (props) => {    
    const { productData: {
        preview, price, discount, rating, comments, description
    } } = props;
    console.log(preview, price, discount, rating, comments, description);
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
                <button className={styles['button-add-to-card']}>В корзину</button>
            </div>
        </div>
    )
}
