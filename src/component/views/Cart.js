import React from 'react';
import Header from '../layouts/header/Header';
import Footer from '../layouts/footer/FooterWrapper';
import MobileBottomNavbar from '../layouts/navbar/MobileBottomNavbar';
import CartWrapper from '../layouts/cart/CartWrapper';

const Cart = () => {
  return (
    <div>
      <Header />
      <MobileBottomNavbar />
      <CartWrapper />
      <Footer />
    </div>
  );
};

export default Cart;
