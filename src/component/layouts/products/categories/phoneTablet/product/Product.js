import React from 'react';
import ProductList from './ProductList';
import products from '../../../../../data/products/products';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles({
  container: {
  }
});

const Product = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        {products.map((product, key) => (
          <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
            <ProductList />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
