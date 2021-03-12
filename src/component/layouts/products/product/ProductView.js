import React, { useContext, useEffect, useState, Suspense } from 'react';
import AppContext from '../../../../context/app/appContext';
import ProductDetails from './ProductDetails';
import DeliveryDetails from './DeliveryAndReturn';
import Description from './Description';
import CustomerFeedback from './customerFeedback';

import products from '../../../data/products/products';
import Loading from '../Loading';

// Material Ui/Core
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  container,
  whiteColor,
  grayColor,
} from '../../../assets/js/styleCss';
// import ProductImage from './ProductImage';
const ProductImage = React.lazy(() => import('./ProductImage'));

const styles = makeStyles({
  container: {
    ...container,
    marginTop: '10px',
    marginBottom: '10px',
    padding: '0px'
  },
  gridContainer: {
    backgroundColor: whiteColor,
    padding: '10px'
  },
  headerText: {
    color: grayColor[2],
    fontWeight: 'bold',
    fontSize: '16px'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgWhite: {
    backgroundColor: whiteColor
  },
});

const ProductView = props => {
  // Get Product Id
  const productId = window.location.pathname.split('/').reverse()[0];

  // Fetch Data
  useEffect(() => {
    const foundItem = products.find(product => product.id === productId);
    setItem(foundItem);
  }, [productId]);

  const [item, setItem] = useState(null);

  const classes = styles();
  const appContext = useContext(AppContext);
  const { addToCart } = appContext;

  const saveToCart = () => {
    addToCart(item, props);
  };
  return (
    <div>
      {item ? (
        <>
          <div className={classes.container}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Grid container className={`${classes.gridContainer}`}>
                  <Grid item className={classes.center} xs={12} sm={5} md={4}>
                    <Suspense fallback={<Loading />}>
                      <ProductImage img={item.img} alt={item.name} />
                    </Suspense>
                  </Grid>
                  <Grid
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%'
                    }}
                    item
                    xs={12}
                    sm={7}
                    md={8}
                  >
                    <ProductDetails
                      addToCart={saveToCart}
                      name={item.name}
                      brand={item.brand}
                      price={item.price}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <DeliveryDetails />
              </Grid>
            </Grid>
          </div>
          <Description />
          <CustomerFeedback />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductView;
