import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { BasketPage } from './components/basketPage/basketPage';
import { CatalogPage } from './components/catalogPage/catalogPage';
import { Header } from "./components/header/header";
import { getCart } from './services/cartApi';
import { guid } from './utils/guid';
export const cookieName = 'sessionToken';

function App() {
  const [cartData, setCartData] = useState([]);  
  useEffect(() => {
    const cookieRegExp = new RegExp(cookieName);
    if (!cookieRegExp.test(document.cookie)) {
      const tokenValue = guid()
      document.cookie = `${cookieName}=${tokenValue}`;
    }
    (async function fetchCart() {
      const response = await getCart();
      console.log(response);
      setCartData(response.data);
    })();
  }, []);
  return (
    <Router>
      <Header cartItemCount={cartData.length}/>
      <Switch>
        <Route exact path="/">
          <CatalogPage />
        </Route>
        <Route path="/basket">
          <BasketPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
