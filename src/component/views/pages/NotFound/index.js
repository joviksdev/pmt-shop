import React from 'react';
import Header from './Header';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { container } from '../../../assets/js/styleCss';
const styles = makeStyles({
  container: {
    ...container,
    minHeight: '50vh'
  },
  gridItem: {
    margin: 'auto',
    textAlign: 'center'
  },
  headerText: {
    
  }
});

const index = () => {
  const classes = styles();
  return (
    <div>
      <Header />
      <Grid className={classes.container} container>
        <Grid className={classes.gridItem} item xs={10} md={6}>
          <Typography variant='h3'>404</Typography>
          <Typography variant='h5'>Page not found :(</Typography>
          <Typography variant='body1' paragraph>
            Contact support
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
