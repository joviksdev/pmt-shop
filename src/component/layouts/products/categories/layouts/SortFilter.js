import React, { useState } from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// Material-UI/Icon
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import SortIcon from '@material-ui/icons/Sort';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { primaryColor, grayColor } from '../../../../assets/js/styleCss';

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
  },
  sortWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    top: '40px',
    left: '50%',
    transform: 'translate(-50%)',
    zIndex: '100',
    width: '160px'
  },
  sortBtn: {
    textTransform: 'capitalize',
    color: grayColor[2],
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: primaryColor
    }
  }
});

const SortFilter = ({ displayFilter }) => {
  const classes = styles();

  const [isDisplaySortValue, setIsDiplaySortValue] = useState(false);
  const [selectedSortValue, setSelectedSortValue] = useState('Trending');

  const selectSortValueHandler = e => {
    setSelectedSortValue(e.target.textContent);
    setIsDiplaySortValue(false);
  };

  const sortValues = [
    'Trending',
    'Order',
    'Newest arrival',
    'Price- low to high',
    'price - high to low',
    'Product rating'
  ];

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
          <ClickAwayListener onClickAway={() => setIsDiplaySortValue(false)}>
            <div className={classes.sortWrapper}>
              <Button
                className={classes.sortBtn}
                onClick={() => setIsDiplaySortValue(!isDisplaySortValue)}
              >
                Sort by <ArrowRightIcon /> {selectedSortValue}
              </Button>
              <Collapse in={isDisplaySortValue}>
                <Paper className={classes.paper} elevation={4}>
                  <List>
                    {sortValues.map((value, key) => (
                      <ListItem
                        onClick={e => selectSortValueHandler(e)}
                        key={key}
                        button
                      >
                        {value}
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Collapse>
            </div>
          </ClickAwayListener>
        </Hidden>
      </>
    </div>
  );
};

export default SortFilter;
