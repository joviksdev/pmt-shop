import React from 'react';
import DownlaodApp from './DownlaodApp';
import About from './About';
import PaymentMethod from './PaymentMethod';
import Partnership from './Partnership';
import Copyright from './Copyright';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { blackColor, container, grayColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    // backgroundColor: grayColor[3],
    backgroundColor: blackColor,
    padding: '20px 0px',
    color: grayColor[4]
  },
  gridContainer: {
    ...container
  }
});

const FooterMain = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} lg={4}>
          <DownlaodApp />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <About />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <PaymentMethod />
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <Partnership />
        </Grid>
      </Grid>
      <Copyright />
    </div>
  );
};

export default FooterMain;
