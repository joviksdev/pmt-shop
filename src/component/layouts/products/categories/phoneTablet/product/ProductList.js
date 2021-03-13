import React from 'react';
import img from '../../../../../assets/img/products/samsung.png';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

// Material-UI/Icon
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';

import {
  grayColor,
  primaryColor,
  whiteColor,
  defaultBoxShadow
} from '../../../../../assets/js/styleCss';
const styles = makeStyles({
  container: {
    position: 'relative',
    backgroundColor: whiteColor,
    borderRadius: '5px',
    padding: '10px',
    '&:hover': {
      ...defaultBoxShadow
    }
  },
  imageWrapper: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    '@media (min-width: 600px)': {
      width: '160px',
      height: '160px'
    },
    '& img': {
      display: 'block',
      width: '100%',
      margin: 'auto'
    }
  },
  discount: {
    position: 'absolute',
    top: '0px',
    left: '10px',
    fontSize: '13px',
    zIndex: '50',
    padding: '3px',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    color: whiteColor,
    backgroundColor: primaryColor
  },
  headerText: {
    color: grayColor[2]
  },
  itemName: {
    color: grayColor[2],
    fontSize: '16px !important',
    marginBottom: '3px',
    '@media (min-width: 768px)': {
      fontSize: '18px !important'
    }
  },
  itemPrice: {
    color: grayColor[2],
    fontSize: '18px !important',
    marginBottom: '5px',
    fontWeight: 'bold',
    '@media (min-width: 768px)': {
      fontSize: '20px !important'
    }
  },
  reviewWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  ratingIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    marginRight: '10px'
  },
  addToCart: {
    minWidth: 'initial',
    textTransform: 'capitalize',
    border: `1px solid ${primaryColor}`,
    color: primaryColor,
    marginTop: '10px',
    padding: '3px 8px',
    '&:hover': {
      color: whiteColor,
      backgroundColor: primaryColor
    },
    '@media (min-width: 600px)': {
      width: '100%'
    }
  },
  iconBtn: {
    minWidth: 'initial',
    color: grayColor[6],
    '&:hover': {
      color: primaryColor
    }
  },
  rateIcon: {
    color: grayColor[9],
    width: '20px',
    height: '20px'
  },
  ratedIcon: {
    color: primaryColor
  }
});

const item = {
  img,
  name: 'shoe',
  price: '6000',
  discount: '-20%',
  review: '1',
  description:
    'Simple and Fashionable, Soft and Comfortable, Lightweight and wear-resistant. It is perfect for daily use. This classic monk single buckle shoes features Genuine Leather upper, slip on design for easy on/off wear, and monk shoes detailing on side for added style'
};

const reviews = [1, 2, 3, 4, 5];

const ProductList = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <span className={classes.discount}>{item.discount}</span>
      <Grid container>
        <Grid item xs={4} sm={12}>
          <div className={classes.imageWrapper}>
            <img src={img} alt='product' />
          </div>
        </Grid>
        <Grid item xs={8} sm={12}>
          <div>
            <Typography className={classes.itemName} variant={'body1'}>
              {item.name.length > 40
                ? `${item.name.substring(0, 40)}...`
                : item.name}
            </Typography>
            <Typography className={classes.itemPrice} variant={'body1'}>
              &#8358; {'  '} {item.price}
            </Typography>
            <Typography
              style={{ marginBottom: '0px', lineHeight: 'initial' }}
              variant={'body1'}
              paragraph
              color='textSecondary'
            >
              {`${item.description.substring(0, 40)}...`}
            </Typography>
            <div className={classes.reviewWrapper}>
              <div className={classes.ratingIconWrapper}>
                {reviews.map((review, key) => (
                  <StarRateIcon
                    key={key}
                    className={`${classes.rateIcon} ${
                      item.review >= review && classes.ratedIcon
                    }`}
                  />
                ))}
              </div>
              <Typography
                style={{ marginBottom: '0px' }}
                paragraph
                color='textSecondary'
                variant='body2'
              >{`(${item.review} review${
                item.review.length > 1 ? 's' : ''
              })`}</Typography>
            </div>
          </div>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          xs={12}
          item
        >
          <Button className={classes.addToCart}>add to cart</Button>
          <Hidden implementation='css' smUp>
            <Button className={classes.iconBtn}>
              <FavoriteIcon />
            </Button>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
