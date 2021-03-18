import React from 'react';
import CategorySidebar from '../sidebar/maxCategory/CategorySidebar';
import { container } from '../../assets/js/styleCss';
import Slider from '../carousel/Slider';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  container: {
    ...container,
    padding: '15px'
  },
  showcase: {
    display: 'flex',
    height: '100%'
  },
  carouselWrapper: {
    height: '30vh',
    '@media (min-width: 576px)': {
      height: '50vh'
    },
    '@media (min-width: 960px)': {
      height: 'initial'
    }
  }
});

const ShowcaseWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid className={classes.showcase} container spacing={2}>
        <Grid item md={3} lg={2}>
          <Hidden smDown implementation='css'>
            <CategorySidebar />
          </Hidden>
        </Grid>
        <Grid
          style={{ overflow: 'hidden' }}
          className={classes.carouselWrapper}
          item
          xs={12}
          md={9}
          lg={8}
        >
          <Slider />
        </Grid>
        <Grid item lg={2}>
          <Hidden mdDown implementation='css'>
            adds
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowcaseWrapper;
