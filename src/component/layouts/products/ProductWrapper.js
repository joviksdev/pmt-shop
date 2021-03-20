import React, { Suspense } from 'react';
import Loading from './Loading';
import styles from './styles';
// import ProductItem from './ProductItem';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';

import { Box, Typography } from '@material-ui/core';

const ProductItem = React.lazy(() => import('./ProductItem'));

const useStyles = makeStyles(styles);

const ProductsWrapper = props => {
  const { headerText, products } = props;
  const classes = useStyles();
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
        <Box  className={classes.gridContainer}>
          {products &&
            products.map((product, key) => (
              <Box key={key} className={classes.gridItem}>
                <Suspense fallback={<Loading />}>
                  <ProductItem product={product} />
                </Suspense>
              </Box>
            ))}
        </Box>
      </div>
    </div>
  );
};

export default ProductsWrapper;
