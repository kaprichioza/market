import "./App.css";
import { CatalogContent } from "./components/catalogContent/catalogContent";
import { Header } from "./components/header/header";
import { Title } from "./components/title/title";
import catalogData from './dataContext/catalogData.json';
function App() {  
  return (
    <div>
      <Header />
      <Title />
      <CatalogContent catalogData={catalogData}/>
    </div>
  );
}

export default App;
