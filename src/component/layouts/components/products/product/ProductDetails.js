import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Material-UI/Icon
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  primaryColor,
  whiteColor,
  grayColor
} from '../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    width: '100%'
  },
  headerText: {
    color: grayColor[2],
    fontWeight: 'bold',
    fontSize: '16px'
  },
  textBrand: {
    color: primaryColor
  },
  text: {
    marginBottom: '0px',
    display: 'flex',
    color: grayColor[6],
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: '10px'
    }
  },
  btn: {
    textTransform: 'capitalize',
    width: '100%',
    border: `2px solid ${primaryColor}`,
    color: whiteColor,
    '& .MuiSvgIcon-root': {
      marginRight: '5px'
    }
  },
  btnBg: {
    backgroundColor: primaryColor,
    '&:hover': {
      backgroundColor: primaryColor,
      opacity: '0.8'
    }
  },
  btnOutline: {
    border: `2px solid ${primaryColor}`,
    color: primaryColor,
    '&:hover': {
      color: whiteColor,
      backgroundColor: primaryColor,
      opacity: '0.8'
    }
  }
});

const ProductDetails = props => {
  const { name, brand, price, addToCart } = props;
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography
        style={{ textTransform: 'capitalize' }}
        color='textSecondary'
        variant='h5'
      >
        {name}
      </Typography>
      {brand && (
        <Typography
          style={{ marginBottom: '3px' }}
          color='textSecondary'
          paragraph
          variant='body2'
        >
          Brand: <span className={classes.textBrand}>{brand}</span>
        </Typography>
      )}
      <Typography
        style={{ fontWeight: 'bold', fontSize: '18px' }}
        color='textSecondary'
        paragraph
        variant='h6'
      >
        Price: <span>&#8358;</span> {'  '}
        {price}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
            onClick={() => addToCart()}
            className={`${classes.btn} ${classes.btnBg}`}
          >
            <AddShoppingCartIcon />
            Add to cart
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button className={`${classes.btn} ${classes.btnOutline}`}>
            <FavoriteIcon />
            Save for later
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
