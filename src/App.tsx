// 你是個React JS 工程師　幫我編寫App.js  使用 React router 包含首頁 登入 商品介紹 購物車頁 內容
import { useState } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Cart from './pages/Cart';
// import PromptList from './pages/promptlist'
import ScrollToTopButton from './components/ScrollToTopButton'
import Header from './components/Header';
import { CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;