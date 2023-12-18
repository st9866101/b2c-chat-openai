import { useState, useEffect } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import MahjongRules from './pages/MahjongRules';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Readme from './pages/Readme';
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTopButton from './components/ScrollToTopButton'
import Header from './components/Header';
import { CartItem } from './types';
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import Footer from './components/Footer';


const useStyles = makeStyles((theme) => ({
  content: {
    marginBottom: theme.mixins.toolbar.minHeight,
    // 其他樣式設定...
  },
}));
function App() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const DefaultUser = 'Vader'
  const DefaultPS = '123456'
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
    const LoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || '[]');
    setIsLoggedIn(LoggedIn)
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);


  return (
    <BrowserRouter>
      <Box className={classes.content}>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Box>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/b2c-chat-openai" element={<Home />} />
        <Route path="/products" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/mahjong" element={<MahjongRules />} />
        <Route path="/readme" element={<Readme />} />
        {isLoggedIn ? (
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        ) : (<Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}
          DefaultUser={DefaultUser}
          DefaultPS={DefaultPS}
        />} />)}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;