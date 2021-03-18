import React, { useState } from 'react';
import Header from '../../../layouts/header/Header';
import MobileBottomNavbar from '../../../layouts/navbar/MobileBottomNavbar';
import SubHeader from '../../../layouts/products/categories/layouts/SubHeader';
import MobileFilter from './MobileSidebar';
import Product from '../../../layouts/products/categories/layouts/product/Product';
import Footer from '../../../layouts/footer/FooterWrapper';
import Sidebar from './Sidebar';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { container } from '../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    marginBottom: '20px'
  },
  sidebar: {
    display: 'none',
    '@media (min-width: 960px)': {
      display: 'block'
    }
  }
});

const Wrapper = () => {
  const classes = styles();
  const [isDisplayFilter, setIsDisplayFilter] = useState(false);

  // Hide Filter
  const hideFilter = () => setIsDisplayFilter(false);

  // Display Filter
  const displayFilter = () => setIsDisplayFilter(true);

  return (
    <div>
      <Header />
      <SubHeader headerText={'Adroid Phones'} displayFilter={displayFilter} />
      <MobileFilter isDisplayFilter={isDisplayFilter} hideFilter={hideFilter} />
      <MobileBottomNavbar />
      <div className={classes.container}>
        <Grid container spacing={2}>
          <Grid className={classes.sidebar} item md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Product />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
