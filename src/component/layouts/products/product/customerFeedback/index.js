import React from 'react';
import ProductRating from './ProductRating';
import CustomerReview from './CustomerReview';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {
  container,
  grayColor,
  whiteColor
} from '../../../../assets/js/styleCss';

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

const CustomerFeedback = () => {
  const classes = styles();
  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        className={classes.container}
        style={{ paddingTop: '0px', paddingBottom: '0px' }}
      >
        <Typography variant='h6' className={classes.headerText}>
          Customer Feedback
        </Typography>
      </div>
      <div className={`${classes.container} ${classes.content}`}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <ProductRating />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomerReview />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CustomerFeedback;
