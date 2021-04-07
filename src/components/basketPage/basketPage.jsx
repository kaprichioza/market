import React from 'react'
import styles from './basketPage.module.css';
import { Title } from '../title/title'
import { OrderDetails } from '../orderDetails/orderDetails';
import { Summary } from '../summary/summary';

export const BasketPage = () => {
    const cartItems = [{
        "id": 1,
        "preview": "product-img.png",
        "price": 7321,
        "description": "Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг"
    }, {
        "id": 2,
        "preview": "product-img1.png",
        "price": 7321,
        "description": "Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг"
    }];
    const sum = cartItems.reduce((accum, currentItem) => accum + currentItem.price, 0);
    return (
        <div>
            <Title title='Корзина' description='2 товара' />
            <OrderDetails cartItems={cartItems} />
            <Summary quantity={cartItems.length} sum={sum} />
        </div>
    )
}
