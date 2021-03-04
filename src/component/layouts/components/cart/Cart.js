import React, { Suspense, useContext } from 'react';
import AppContext from '../../../../context/app/appContext';
import Spinner from '../spinner/Spinner';

// Material-UI/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { grayColor, container, whiteColor } from '../../../assets/js/styleCss';

const CartItem = React.lazy(() => import('./CartItem'));

const styles = makeStyles({
  container: {
    ...container,
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  content: {
    backgroundColor: whiteColor
  },
  headerText: {
    color: grayColor[2],
    fontWeight: 'bold',
    fontSize: '16px'
  }
});

const Cart = () => {
  const classes = styles();
  const appContext = useContext(AppContext);
  const { carts } = appContext;
  return (
    <div>
      <div style={{ paddingBottom: '0px' }} className={classes.container}>
        <Typography className={classes.headerText} variant='h6'>
          My cart{' '}
          {carts ? `(${carts.length} item${carts.length > 1 ? 's' : ''})` : ''}
        </Typography>
      </div>
      <div className={`${classes.container} ${classes.content}`}>
        <Suspense fallback={<Spinner />}>
          <CartItem carts={carts} />
        </Suspense>
      </div>
    </div>
  );
};

export default Cart;
