import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { BasketPage } from './components/basketPage/basketPage';
import { CatalogPage } from './components/catalogPage/catalogPage';
import { Header } from "./components/header/header";
import { guid } from './utils/guid';
export const cookieName = 'sessionToken';

function App() {
  useEffect(() => {
    const cookieRegExp = new RegExp(cookieName);
    if (cookieRegExp.test(document.cookie)) return;
    const tokenValue = guid()
    document.cookie=`${cookieName}=${tokenValue}`;
  }, []);
  return (
    <Router>
      <Header />
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
