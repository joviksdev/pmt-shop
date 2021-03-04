import React from 'react';
import img from '../../assets/img/item.jpg';
import ProductItem from './ProductItem';

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

const styles = makeStyles({
  container: {
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
    width: '100%',
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

const NewArrival = (props) => {
  const { headerText } = props
  const classes = styles();
  return (
    <>
      <div className={classes.headerTextContainer}>
        <div className={`${classes.headerText}`}>
          <Typography paragraph variant='body1'>
            {headerText}
          </Typography>
          <span>View more</span>
        </div>
      </div>
      <div className={classes.container}>
        <Grid className={classes.gridContainer} container>
          <Grid className={classes.gridItem} item xs={6} md={3}>
            <ProductItem
              img={img}
              name={'item name'}
              price={'5000'}
              discount={'-20%'}
            />
          </Grid>
          <Grid className={classes.gridItem} item xs={6} md={3}>
            <ProductItem
              img={img}
              name={'item name'}
              price={'5000'}
              discount={'-20%'}
            />
          </Grid>
          <Grid className={classes.gridItem} item xs={6} md={3}>
            <ProductItem
              img={img}
              name={'item name'}
              price={'5000'}
              discount={'-20%'}
            />
          </Grid>
          <Grid
            className={classes.gridItem}
            name={'item name'}
            item
            xs={6}
            md={3}
          >
            <ProductItem
              img={img}
              name={'item name'}
              price={'5000'}
              discount={'-20%'}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewArrival;
