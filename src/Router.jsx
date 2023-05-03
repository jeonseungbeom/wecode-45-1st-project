import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Empty from './pages/Empty/Empty';
import Footer from './components/Footer/Footer';

const Router = () => {
  const pathname = window.location.pathname;
  return (
    <BrowserRouter>
      {pathname === `/login` || pathname === `/join` || <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Empty />} />
      </Routes>
      {pathname === `/login` || pathname === `/join` || <Footer />}
    </BrowserRouter>
  );
};

export default Router;
