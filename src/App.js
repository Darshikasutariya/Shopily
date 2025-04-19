import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Account from './components/Account';
import Product from './components/Product';
import Footer from './components/Footer';
import { Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ProductState from './Context/products/productState';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <ProductState>
    <Navbar/>
      
        <Routes>

        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Account' element={<Account/>} />
        <Route exact path='/Product' element={<Product/>} />
        <Route exact path='/Cart' element={<Cart/>}></Route>
        <Route path='/product/:id' element={<ProductDetail/>}></Route>
        <Route exact path='/about' element={<About/>} ></Route>
        <Route exact path='/contact' element={<Contact/>} ></Route>

        </Routes>
      
      <Footer/>
    </ProductState>
    </>
  );
}

export default App;
