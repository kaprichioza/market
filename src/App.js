import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { BasketPage } from './components/basketPage/basketPage';
import { CatalogPage } from './components/catalogPage/catalogPage';
import { Header } from "./components/header/header";
import { addToCart, getCart } from './services/cartApi';
import { guid } from './utils/guid';
export const cookieName = 'sessionToken';
export const CartContext = React.createContext([]);

function App() {
  const [cartData, setCartData] = useState(null);
  useEffect(() => {
    const cookieRegExp = new RegExp(cookieName);
    if (!cookieRegExp.test(document.cookie)) {
      const tokenValue = guid()
      document.cookie = `${cookieName}=${tokenValue}`;
    }
    (async function fetchCart() {
      const response = await getCart();
      setCartData(response.data);
    })();
  }, []);
  async function onAddToCart(id) {
    try {
        const responseCartItems = await addToCart(id);  
        setCartData(responseCartItems.data);
    } catch (e) {
        console.error(e)
    }
}
  return (
    <CartContext.Provider value={cartData} >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <CatalogPage onAddToCart={onAddToCart}/>
          </Route>
          <Route path="/basket">
            <BasketPage />
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
