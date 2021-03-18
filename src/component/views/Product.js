import React from 'react';
import Header from '../layouts/header/Header';
import Footer from '../layouts/footer/FooterWrapper';
import MobileBottomNavbar from '../layouts/navbar/MobileBottomNavbar';
import ProductView from '../layouts/products/product/ProductView';

const Product = props => {
  return (
    <div>
      <Header />
      <MobileBottomNavbar />
      <ProductView {...props} />
      <Footer />
    </div>
  );
};

export default Product;
