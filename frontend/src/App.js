import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Categories from './components/Categories';
import Cart from './components/Cart';
import PaymentPage from './components/Payment';
import Orders from './components/Orders'
import OrderTracking from './components/OrderTracking';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin' element={<Sidebar/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/category' element={<Categories/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/tracking" element={<OrderTracking/>}/>
      </Routes>
    </div>
  );
}

export default App;
