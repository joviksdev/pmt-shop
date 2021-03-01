import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

// Material-UI/Icon
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RssFeedIcon from '@material-ui/icons/RssFeed';

import { container, grayColor, whiteColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    width: '100%',
    backgroundColor: whiteColor,
    paddingTop: '8px',
    paddingBottom: '8px',
    boxShadow: '-3px 0px 6px rgba(0, 0, 0, 0.3)',
    zIndex: '1000'
  },
  containerContent: {
    ...container,
    zIndex: '400'
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      color: grayColor[2]
    },
    '& .MuiButton-root': {
      padding: '5px !important',
      minWidth: 'unset !important'
    }
  }
});

const MobileBottomNavbar = () => {
  const classes = styles();
  return (
    <Hidden mdUp implementation='css'>
      <div className={classes.container}>
        <Grid className={classes.containerContent} container>
          <Grid className={classes.gridItem} item xs={3}>
            <Link to='/'>
              <Button>
                <HomeIcon />
              </Button>
            </Link>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Link to='/'>
              <Button>
                <RssFeedIcon />
              </Button>
            </Link>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Link to='/'>
              <Button>
                <FavoriteIcon />
              </Button>
            </Link>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Link to='/'>
              <Button>
                <PersonIcon />
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Hidden>
  );
};

export default MobileBottomNavbar;
