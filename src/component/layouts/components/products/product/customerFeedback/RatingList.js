import React from 'react';

// Material-UI/Core
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import LinearProgress from '@material-ui/core/LinearProgress';

// Material-UI/Icon
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks5Icon from '@material-ui/icons/Looks5';
import StarRateIcon from '@material-ui/icons/StarRate';
import { makeStyles } from '@material-ui/core';

import { primaryColor } from '../../../../../assets/js/styleCss'

const styles = makeStyles({
  list: {
    padding: '0px'
  },
  progress: {
    width: '100%',
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: primaryColor
    }
  },
  numberIcon: {
    marginRight: '10px'
  }
});

const RatingList = () => {
  const classes = styles();
  return (
    <div>
      <List className={classes.list}>
        <ListItem button>
          <Looks5Icon className={classes.numberIcon} />
          <StarRateIcon />
          <div className={classes.progress}>
            <LinearProgress variant='determinate' value={30} />
          </div>
        </ListItem>
        <ListItem button>
          <Looks4Icon className={classes.numberIcon} />
          <StarRateIcon />
          <div className={classes.progress}>
            <LinearProgress variant='determinate' value={20} />
          </div>
        </ListItem>
        <ListItem button>
          <Looks3Icon className={classes.numberIcon} />
          <StarRateIcon />
          <div className={classes.progress}>
            <LinearProgress variant='determinate' value={60} />
          </div>
        </ListItem>
        <ListItem button>
          <LooksTwoIcon className={classes.numberIcon} />
          <StarRateIcon />
          <div className={classes.progress}>
            <LinearProgress variant='determinate' value={40} />
          </div>
        </ListItem>
        <ListItem button>
          <LooksOneIcon className={classes.numberIcon} />
          <StarRateIcon />
          <div className={classes.progress}>
            <LinearProgress variant='determinate' value={10} />
          </div>
        </ListItem>
      </List>
    </div>
  );
};

export default RatingList;
