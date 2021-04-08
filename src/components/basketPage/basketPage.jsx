import React, { useContext, useEffect, useState } from 'react'
import styles from './basketPage.module.css';
import { Title } from '../title/title'
import { OrderDetails } from '../orderDetails/orderDetails';
import { Summary } from '../summary/summary';
import { Loader } from '../loader/loader';
import { getProductData } from '../../services/cartApi';
import { CartContext } from '../../App';


export const BasketPage = (props) => {
    const [basketData, setBasketData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const cartData  =  useContext(CartContext);
    useEffect(() => {
        (async function fetchProducts() {
            try {
                const promiseChain = (cartData && cartData.map((id) => getProductData(id))) || [];
                const response = await Promise.all(promiseChain);  
                const parseData = response.map((currentValue) => currentValue.data);
                setBasketData(parseData);    
                setIsLoading(false);        
            } catch (e) {
                console.error(e)
                // TODO: show toast notification
            } finally {
                setIsLoading(false);
            }
        })()   
    }, [cartData])
    const sum = basketData && basketData.reduce((accum, currentItem) => accum + currentItem.price, 0);
    return (
        <>{isLoading
            ? <Loader />
            : <>
                <Title title='Корзина' description={cartData && cartData.length} />
                <OrderDetails cartItems={basketData} />
                <Summary quantity={basketData && basketData.length} sum={sum} />
            </>}
        </>
    )
}
