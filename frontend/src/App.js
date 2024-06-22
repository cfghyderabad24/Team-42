import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Categories from './components/Categories';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<Sidebar/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/category' element={<Categories/>}/>
      </Routes>
    </div>
  );
}

export default App;
