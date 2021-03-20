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
    padding: '0px',
    '@media (min-width: 760px)': {
      padding: '0px 15px',
      marginTop: '10px'
    }
  },
  showcase: {
    display: 'flex',
    height: '100%',
    '& .MuiGrid-item': {}
  },
  carouselWrapper: {
    height: '30vh',
    '@media (min-width: 576px)': {
      height: '50vh'
    },
    '@media (min-width: 960px)': {
      height: 'initial'
    }
  },
  hidden: {
    display: 'none',
    '@media (min-width: 1280px)': {
      display: 'block'
    }
  }
});

const ShowcaseWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid className={classes.showcase} container>
        <Grid style={{ paddingRight: '10px' }} item md={3} lg={2}>
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
        <Grid className={classes.hidden} item lg={2}>
          adds
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowcaseWrapper;
