import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/FooterWrapper';
import ShowcaseWrapper from '../../layouts/showcase/ShowcaseWrapper';
import ProductWrapper from '../../layouts/components/products/ProductWrapper';
import MobileBottomNavbar from '../../layouts/navbar/MobileBottomNavbar';

// Products
import {
  trendingProducts,
  newArrival,
  recommendedProduct
} from '../../data/products/products';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    '@media (min-width: 960px)': {
      marginBottom: '0px'
    }
  }
});

const Home = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Header />
      <MobileBottomNavbar />
      <ShowcaseWrapper />
      <ProductWrapper products={newArrival} headerText={'New arrival'} />
      <ProductWrapper
        products={recommendedProduct}
        headerText={'Recommended for you'}
      />
      <ProductWrapper products={trendingProducts} headerText={'Trending now'} />
      <Footer />
    </div>
  );
};

export default Home;
