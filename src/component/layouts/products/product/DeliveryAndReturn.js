import React from 'react';
import { Link } from 'react-router-dom';

// Material Ui/Core
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI/Icon
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

import {
  grayColor,
  whiteColor,
  primaryColor
} from '../../../assets/js/styleCss';

const styles = makeStyles({
  gridContainer: {
    backgroundColor: whiteColor,
    padding: '10px'
  },
  flex: {
    marginBottom: '0px',
    display: 'flex',
    color: grayColor[6],
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: '10px'
    }
  },
  headerText: {
    color: grayColor[2],
    fontWeight: 'bold',
    fontSize: '16px'
  },

  link: {
    textDecoration: 'underline',
    color: primaryColor
  }
});

const DeliveryDetails = () => {
  const classes = styles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={`${classes.gridContainer}`}>
            <Typography variant='h6' className={classes.headerText}>
              Delivery
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography className={classes.flex} variant='body2' paragraph>
                  <LocalShippingIcon />
                  Express delivery
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.flex} variant='body2' paragraph>
                  <HomeWorkIcon />
                  Pickup Station
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={`${classes.gridContainer}`}>
            <Typography variant='h6' className={classes.headerText}>
              Return policy
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography className={classes.flex} variant='body2' paragraph>
                  <HistoryOutlinedIcon />
                  <span>
                    Free return within 15 days for Jumia Mall items and 7 days
                    for other eligible items.{' '}
                    <Link className={classes.link} to='/'>
                      See more
                    </Link>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryDetails;
