import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import DeliveryDetails from './DeliveryDetails';
import Description from './Description';
import CustomerFeedback from './customerFeedback'

// Material Ui/Core
import { makeStyles } from '@material-ui/core/styles';
import { container, whiteColor } from '../../../../assets/js/styleCss';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const styles = makeStyles({
  container: {
    ...container,
    marginTop: '10px',
    marginBottom: '10px',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgWhite: {
    backgroundColor: whiteColor
  }
});

const ProductView = () => {
  const classes = styles();
  return (
    <div>
      <Grid className={`${classes.container} ${classes.bgWhite}`} container>
        <Grid item className={classes.center} xs={12} sm={5} md={4}>
          <ProductImage />
        </Grid>
        <Grid
          style={{ display: 'flex', alignItems: 'center', width: '100%' }}
          item
          xs={12}
          sm={7}
          md={8}
        >
          <ProductDetails />
        </Grid>
      </Grid>
      <Hidden mdUp implementation='css'>
        <DeliveryDetails />
      </Hidden>
      <Description />
      <CustomerFeedback />
    </div>
  );
};

export default ProductView;
