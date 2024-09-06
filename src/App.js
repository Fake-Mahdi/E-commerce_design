import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Store from './pages/Store';
import Product from './pages/Product';
import Categories from './pages/categories';
import Cart from './pages/cart';
import ScrollToTop from './ScrollToTop';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from './components/GlobalComponents/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/product/:id/:type" element={<Product />} />
            <Route path="/categories/:type" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            {/* Fallback route for 404 Not Found */}
            <Route path="*" element={<h1 className='Text-center'>404 Not Found</h1>} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
