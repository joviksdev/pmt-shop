import React from 'react';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import {
  primaryColor,
  whiteColor,
  defaultBoxShadow,
  text
} from '../../../assets/js/styleCss';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

const styles = makeStyles({
  card: {
    position: 'relative',
    height: '100%',
    boxShadow: 'none',
    '&:hover': {
      ...defaultBoxShadow,
      zIndex: '100'
    }
  },
  cardContent: {
    padding: '10px !important'
  },
  imageWrapper: {
    maxWidth: '160px',
    margin: 'auto',
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
  description: {
    textAlign: 'center'
  },
  cardText: {
    marginBottom: '0px',
    ...text
  },
  price: {
    fontWeight: 'bold'
  }
});

const ProductItem = props => {
  const { img, discount, name, price } = props;
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.discountText} variant='body2' paragraph>
          {discount}
        </Typography>
        <div className={classes.imageWrapper}>
          <img src={img} alt='new arrival' />
        </div>
        <div className={classes.description}>
          <Typography
            className={classes.cardText}
            paragraph
            variant='body2'
            color='textSecondary'
          >
            {name}
          </Typography>
          <Typography
            className={`${classes.cardText} ${classes.price}`}
            paragraph
            variant='body2'
            color='textSecondary'
          >
            <span>&#8358;</span>
            {price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
