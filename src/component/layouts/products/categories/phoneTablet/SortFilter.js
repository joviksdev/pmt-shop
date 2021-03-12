import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Material-UI/Icon
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import SortIcon from '@material-ui/icons/Sort';
import { primaryColor } from '../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    textAlign: 'center',
    '@media (min-width: 960px)': {
      textAlign: 'initial '
    }
  },
  displayFlex: {
    display: 'flex',
    alignItems: 'center'
  },
  btn: {
    textTransform: 'capitalize',
    color: primaryColor,
    '&:hover': {
      color: primaryColor,
      backgroundColor: 'unset',
      opacity: '0.8'
    },
    '& .MuiSvgIcon-root': {
      marginRight: '10px'
    }
  }
});

const SortFilter = ({ displayFilter }) => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <>
        <Hidden mdUp implementation='css'>
          <Grid container>
            <Grid item xs={6}>
              <div
                style={{ justifyContent: 'flex-end' }}
                className={classes.displayFlex}
              >
                <Button onClick={() => displayFilter()} className={classes.btn}>
                  <FilterListOutlinedIcon />
                  <Typography variant='body2'>filter</Typography>
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.displayFlex}>
                <Button className={classes.btn}>
                  <SortIcon />
                  <Typography variant='body2'>sort</Typography>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden implementation='css' smDown>
          <div>
            <Typography>Sort by</Typography>
            <Button>Newest</Button>
          </div>
        </Hidden>
      </>
    </div>
  );
};

export default SortFilter;
