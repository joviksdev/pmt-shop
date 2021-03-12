import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../../../context/app/appContext';
import EmptyCart from './EmptyCart';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

// Material-UI/Icon
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {
  whiteColor,
  grayColor,
  primaryColor,
  dangerColor
} from '../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    marginBottom: '10px',
    padding: '8px',
    backgroundColor: whiteColor
  },
  imageWrapper: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    '& img': {
      width: '100%'
    },
    '@media (min-width: 768px)': {
      width: '160px !important',
      height: '160px !important'
    }
  },
  headerText: {
    color: grayColor[2],
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& span': {
      color: primaryColor
    }
  },

  gridItem: {
    position: 'relative',
    '@media (min-width: 600px)': {
      paddingLeft: '8px',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '1px',
        backgroundColor: grayColor[10]
      }
    }
  },
  gridItemContent: {
    display: 'flex',
    alignItems: 'center',
    '@media (min-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'start'
    }
  },
  incementDecrementWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    color: grayColor[2],
    textDecoration: 'none',
    textTransform: 'capitalize',
    '&:hover': {
      color: primaryColor
    }
  },
  btnIcon: {
    minWidth: 'initial !important',
    padding: '0px'
  },
  btn: {
    textTransform: 'capitalize',
    padding: '3px',
    minWidth: 'initial !important'
  },
  btnBg: {
    color: dangerColor[0],
    '@media (min-width: 960px)': {
      width: 'initial !important',
      '& .MuiSvgIcon-root': {
        marginRight: '5px'
      },
      color: whiteColor,
      border: `2px solid ${dangerColor[0]}`,
      backgroundColor: dangerColor[0]
    },
    '&:hover': {
      backgroundColor: dangerColor[0],
      opacity: '0.8'
    }
  },
  btnFavourite: {
    color: primaryColor,
    float: 'right',
    '&:hover': {
      color: primaryColor,
      opacity: '0.8'
    }
  },
  btnLink: {
    color: grayColor[6],
    border: `1px solid ${grayColor[6]}`,
    backgroundColor: grayColor[9],
    textTransform: 'capitalize',
    width: '100%',
    '&:hover': {
      color: grayColor[6],
      backgroundColor: grayColor[10],
      opacity: '0.8'
    }
  },
  horizontalLine: {
    height: '1px',
    margin: '8px 0',
    width: '100%',
    backgroundColor: grayColor[10]
  }
});

const CartItem = props => {
  const { carts } = props;
  const appContext = useContext(AppContext);
  const { removeCart, incrementCart, decrementCart } = appContext;

  const classes = styles();

  // Remove Item From Cart
  const removeItemFromCart = id => {
    removeCart(id);
  };

  return (
    <div>
      {carts ? (
        carts.length > 0 ? (
          <>
            <Typography
              style={{ marginBottom: '5px' }}
              className={classes.headerText}
              variant='h6'
            >
              Total{' '}
              <span>
                &#8358; {'  '}
                {carts
                  .map(cart => parseInt(cart.subTotal))
                  .reduce((total, value) => total + value, 0)}
              </span>
            </Typography>
            <Button
              className={classes.btnLink}
              style={{ marginBottom: '10px' }}
            >
              <Link to='/checkout/item'>check out</Link>
            </Button>
            {carts.map((cart, key) => (
              <div key={key} className={classes.container}>
                <Grid container>
                  <Grid item xs={4} sm={3}>
                    <div className={classes.imageWrapper}>
                      <img src={cart.img} alt='cart' />
                    </div>
                  </Grid>
                  <Grid className={classes.gridItem} item xs={8} sm={6} md={6}>
                    <Link
                      className={classes.link}
                      to={`/item/${cart.name}/${cart.id}`}
                    >
                      <Typography
                        style={{ marginBottom: '3px' }}
                        paragraph
                        variant='body1'
                      >
                        {cart.name}
                      </Typography>
                    </Link>
                    <Typography
                      style={{ marginBottom: '5px' }}
                      paragraph
                      color='textSecondary'
                      variant='body2'
                    >
                      {cart.description &&
                        `${cart.description.slice(0, 50)}...`}
                    </Typography>
                    <Typography color='textSecondary'>
                      &#8358; {'  '} {cart.price}
                    </Typography>
                  </Grid>
                  <Grid className={classes.gridItem} item xs={12} sm={3} md={3}>
                    <div className={classes.gridItemContent}>
                      <div
                        style={{ marginRight: '20px' }}
                        className={classes.incementDecrementWrapper}
                      >
                        <Button
                          disabled={cart.quantity === 1 && true}
                          onClick={() => decrementCart(cart)}
                          style={{ marginRight: '10px' }}
                          className={`${classes.btnIcon} ${classes.btnAdd}`}
                        >
                          <IndeterminateCheckBoxIcon />
                        </Button>
                        {cart.quantity}
                        <Button
                          onClick={() => incrementCart(cart)}
                          style={{ marginLeft: '10px' }}
                          className={`${classes.btnIcon}`}
                        >
                          <AddBoxIcon />
                        </Button>
                      </div>
                      <Typography>
                        Subtotal: &#8358; {'  '}
                        {cart.subTotal}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <div className={classes.horizontalLine}></div>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => removeItemFromCart(cart.id)}
                      className={`${classes.btn} ${classes.btnBg}`}
                    >
                      <DeleteForeverIcon />
                      <Hidden smDown implementation='css'>
                        Remove item
                      </Hidden>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={`${classes.btn} ${classes.btnFavourite}`}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </Button>
                  </Grid>
                </Grid>
              </div>
            ))}
          </>
        ) : (
          <div>
            <EmptyCart />
          </div>
        )
      ) : (
        <div>
          <EmptyCart />
        </div>
      )}
    </div>
  );
};

export default CartItem;
