import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/FooterWrapper';
import MobileBottomNavbar from '../../layouts/navbar/MobileBottomNavbar';
import ProductView from '../../layouts/components/products/product/ProductView';

const Product = () => {
  return (
    <div>
      <Header />
      <MobileBottomNavbar />
      <ProductView />
      <Footer />
    </div>
  );
};

export default Product;
