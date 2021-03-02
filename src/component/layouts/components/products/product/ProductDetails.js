import React from 'react';
import DeliveryDetails from './DeliveryDetails';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { primaryColor, whiteColor } from '../../../../assets/js/styleCss';

// Material-UI/Icon
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = makeStyles({
  container: {
    width: '100%'
  },
  headerText: {
    fontWeight: 'bold'
  },
  textBrand: {
    color: primaryColor
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

const ProductDetails = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography color='textSecondary' variant='h5'>
        Nike Sporting Shoe
      </Typography>
      <Typography
        style={{ marginBottom: '3px' }}
        color='textSecondary'
        paragraph
        variant='body2'
      >
        Brand: <span className={classes.textBrand}>Nike</span>
      </Typography>
      <Typography
        style={{ fontWeight: 'bold', fontSize: '18px' }}
        color='textSecondary'
        paragraph
        variant='h6'
      >
        Price: <span>&#8358;</span> {'  '}12000
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button className={`${classes.btn} ${classes.btnBg}`}>
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
