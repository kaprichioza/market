import React, { useContext, useEffect, useState } from 'react'
import styles from './basketPage.module.css';
import { Title } from '../title/title'
import { OrderDetails } from '../orderDetails/orderDetails';
import { Summary } from '../summary/summary';
import { Loader } from '../loader/loader';
import { getCatalog } from '../../services/cartApi';
import { CartContext } from '../../App';


export const BasketPage = (props) => {
    const [basketData, setBasketData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const cartData  =  useContext(CartContext);
    function onCartItemToggle(id) {
        const basketItem = basketData.find(basketItem => basketItem.id === id);
        basketItem.isSelected = !basketItem.isSelected;
        setBasketData([...basketData]);
    }
    function onToggleAll(isSelected) {        
        setBasketData(basketData.map((item) => ({...item, isSelected})));
    }
    useEffect(() => {
        (async function fetchProducts() {
            try {   
                if (cartData.length < 1) return;                           
                const response = await getCatalog(cartData);  
                const cartItems = response.data.map((item) => ({ ...item, isSelected: true }));
                setBasketData(cartItems);    
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
                <OrderDetails onRemoveFromCart={props.onRemoveFromCart} onToggleAll={onToggleAll} onCartItemToggle={onCartItemToggle} cartItems={basketData} />
                <Summary quantity={basketData && basketData.length} sum={sum} />
            </>}
        </>
    )
}
