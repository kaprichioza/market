import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { BasketPage } from './components/basketPage/basketPage';
import { CatalogPage } from './components/catalogPage/catalogPage';
import { Header } from "./components/header/header";

function App() {  
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
