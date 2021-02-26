import React from 'react';
import img from '../../assets/img/item.jpg';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import {
  container,
  primaryColor,
  whiteColor,
  defaultBoxShadow,
  text,
  title
} from '../../assets/js/styleCss';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Grid, Typography } from '@material-ui/core';

const styles = makeStyles({
  container: {
    backgroundColor: whiteColor,
    ...container,
    '@media (min-width: 768px)': {
      backgroundColor: 'unset'
    }
  },
  headerTextContainer:{
    backgroundColor: '#FFF4F4',
    ...container,
    '@media (min-width: 768px)': {
      backgroundColor: 'unset'
    }
  },
  headerText: {
      backgroundColor: '#FFF4F4',
      padding: '5px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    '& p': {
      ...title,
    color: primaryColor,
      fontWeight: 'bold',
      marginBottom: '0px'
    },
    '& span': {
    color: primaryColor,

    }
  },
  gridContainer: {
    backgroundColor: whiteColor,
    padding: '8px',
    '@media (min-width: 768px)': {
      padding: '16px'
    }
  },
  gridItem: {},
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

const NewArrival = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.headerTextContainer}>
        <div className={`${classes.headerText}`}>
          <Typography paragraph variant='body1'>
            New Arrivals
          </Typography>
          <span>View more</span>
        </div>
      </div>
      <div className={classes.container}>
        <Grid className={classes.gridContainer} container>
          <Grid className={classes.gridItem} item xs={6} md={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.discountText}
                  variant='body2'
                  paragraph
                >
                  -20%
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
                    Item Name
                  </Typography>
                  <Typography
                    className={`${classes.cardText} ${classes.price}`}
                    paragraph
                    variant='body2'
                    color='textSecondary'
                  >
                    <span>&#8358;</span> {'  '}7500
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={6} md={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.discountText}
                  variant='body2'
                  paragraph
                >
                  -20%
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
                    Item Name
                  </Typography>
                  <Typography
                    className={`${classes.cardText} ${classes.price}`}
                    paragraph
                    variant='body2'
                    color='textSecondary'
                  >
                    <span>&#8358;</span> {'  '}7500
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={6} md={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.discountText}
                  variant='body2'
                  paragraph
                >
                  -20%
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
                    Item Name
                  </Typography>
                  <Typography
                    className={`${classes.cardText} ${classes.price}`}
                    paragraph
                    variant='body2'
                    color='textSecondary'
                  >
                    <span>&#8358;</span> {'  '}7500
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={6} md={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.discountText}
                  variant='body2'
                  paragraph
                >
                  -20%
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
                    Item Name
                  </Typography>
                  <Typography
                    className={`${classes.cardText} ${classes.price}`}
                    paragraph
                    variant='body2'
                    color='textSecondary'
                  >
                    <span>&#8358;</span> {'  '}7500
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewArrival;
