import React, { Suspense } from 'react';
import Loading from './Loading';
// import ProductItem from './ProductItem';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';
import {
  container,
  primaryColor,
  whiteColor,
  defaultBoxShadow,
  text,
  title
} from '../../../assets/js/styleCss';

const ProductItem = React.lazy(() => import('./ProductItem'));

const styles = makeStyles({
  container: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  productContainer: {
    backgroundColor: whiteColor,
    ...container,
    '@media (min-width: 768px)': {
      backgroundColor: 'unset',
      width: '750px !important'
    }
  },
  headerTextContainer: {
    backgroundColor: '#FFF4F4',
    ...container,
    '@media (min-width: 768px)': {
      backgroundColor: 'unset',
      width: '750px !important'
    }
  },
  headerText: {
    backgroundColor: '#FFF4F4',
    padding: '8px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& p': {
      ...title,
      color: primaryColor,
      fontWeight: 'bold'
    },
    '& span': {
      color: primaryColor
    },
    '@media (min-width: 960px)': {
      padding: '8px 10px'
    }
  },
  gridContainer: {
    backgroundColor: whiteColor,
    padding: '10px',
    '@media (min-width: 768px)': {
      padding: '15px'
    }
  },
  card: {
    position: 'relative',
    boxShadow: 'none',
    '&:hover': {
      ...defaultBoxShadow,
      zIndex: '100'
    }
  },
  imageWrapper: {
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  discountText: {
    padding: '5px',
    borderRadius: '5px',
    color: whiteColor,
    backgroundColor: primaryColor,
    position: 'absolute',
    top: '5px',
    right: '5px',
    '@media (min-width: 768px)': {
      top: '10px',
      right: '10px'
    }
  },
  cardContent: {
    padding: '10px !important'
  },
  bgWhite: {
    backgroundColor: whiteColor
  },
  cardText: {
    marginBottom: '0px',
    ...text
  },
  price: {
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center'
  }
});

const ProductsWrapper = props => {
  const { headerText, products } = props;
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.headerTextContainer}>
        <div className={`${classes.headerText}`}>
          <Typography paragraph variant='body1'>
            {headerText}
          </Typography>
          <span>View more</span>
        </div>
      </div>
      <div className={classes.productContainer}>
        <Grid className={classes.gridContainer} container>
          {products &&
            products.map((product, key) => (
              <Grid key={key} className={classes.gridItem} item xs={6} md={3}>
                <Suspense fallback={<Loading />}>
                  <ProductItem product={product} />
                </Suspense>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProductsWrapper;
