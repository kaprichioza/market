import React, { useContext, useEffect, useState } from 'react';
import { Title } from '../title/title';
import { OrderDetails } from '../orderDetails/orderDetails';
import { Summary } from '../summary/summary';
import { Loader } from '../loader/loader';
import { getCatalog } from '../../services/cartApi';
import { CartContext } from '../../App';
import { pluralize } from '../../utils/pluralize';

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
                if (cartData && cartData.length < 1) return;                           
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
    const selectedItems = basketData.filter(item => item.isSelected);
    const sum = selectedItems.reduce((accum, currentItem) => accum + currentItem.price, 0);
    const quantityItems = basketData.length;
    const descriptionText = `${quantityItems} ${pluralize(quantityItems, ['товар', 'товара', 'товаров'])}`;
    return (
        <>{isLoading
            ? <Loader />
            : <>
                <Title title='Корзина' description={descriptionText} />
                <OrderDetails onRemoveFromCart={props.onRemoveFromCart} onToggleAll={onToggleAll} onCartItemToggle={onCartItemToggle} cartItems={basketData} />
                <Summary onOrderFromCart={props.onOrderFromCart} quantity={selectedItems.length} selectedItems={selectedItems} sum={sum} />
            </>}
        </>
    )
}
