import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { BasketPage } from './components/basketPage/basketPage';
import { CatalogContent } from "./components/catalogContent/catalogContent";
import { Header } from "./components/header/header";
import { Title } from "./components/title/title";
import catalogData from './dataContext/catalogData.json';
function App() {  
  return (
    <Router>      
        <Header />
        <Switch>
          <Route exact path="/">
            <Title title='Дом и сад' description='24 товара'/>
            <CatalogContent catalogData={catalogData} />
          </Route>
          <Route path="/basket">
            <BasketPage />
          </Route>
        </Switch>    
    </Router>
  );
}

export default App;
