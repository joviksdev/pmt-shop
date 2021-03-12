import React from 'react';
import img from '../../assets/img/products/headset.png';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { container, whiteColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: whiteColor
  },
  grid: {
    paddingTop: '10px',
    paddingBottom: '10px'
  },

  headerText: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  imageWrapper: {
    '& img': {
      width: '100%'
    },
    width: '80px',
    height: '80px',
    '@media (min-width: 768px)': {
      width: '100px !important',
      height: '100px !important'
    },
    '@media (min-width: 992px)': {
      width: '120px  !important',
      height: '120px  !important'
    },
    '@media (min-width: 1200px)': {
      width: '140px  !important',
      height: '140px  !important'
    }
  }
});

const Item = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Grid className={classes.grid} container>
        <Grid item xs={4} sm={2}>
          <div className={classes.imageWrapper}>
            <img src={img} alt='item' />
          </div>
        </Grid>
        <Grid item xs={8}>
          Description
        </Grid>
      </Grid>
    </div>
  );
};

export default Item;
