import React from 'react';
import { Link } from 'react-router-dom';

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
    width: '120px',
    height: '120px',
    '@media (min-width: 768px)': {
      width: '140px !important',
      height: '140px !important'
    },
    '@media (min-width: 992px)': {
      width: '160px  !important',
      height: '160px  !important'
    },
    '@media (min-width: 1200px)': {
      width: '180px  !important',
      height: '180px  !important'
    },
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
    ...text,
    marginBottom: '0px',
    textTransform: 'capitalize'
  },
  price: {
    fontWeight: 'bold'
  }
});

const ProductItem = props => {
  const { id, img, discount, name, price } = props.product;
  const classes = styles();
  return (
    <Link to={`/item/${name}/${id}`}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.discountText}
            variant='body2'
            paragraph
          >
            {discount}
          </Typography>
          <div className={classes.imageWrapper}>
            <img src={img} alt={name} />
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
    </Link>
  );
};

export default ProductItem;
