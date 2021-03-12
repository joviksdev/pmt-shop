import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Material-UI/Icon

import {
  container,
  primaryColor,
  whiteColor
} from '../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    marginTop: '10px',
    marginBottom: '10px'
  },
  headerText: {
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '5px'
  },
  content: {
    backgroundColor: whiteColor,
    padding: '8px'
  },
  list: {
    padding: '0px',
    '& .MuiListItem-root': {
      padding: '5px 0px'
    }
  }
});

const Setting = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography className={classes.headerText} variant='h6'>
        Setting
      </Typography>
      <div className={classes.content}>
        <List className={classes.list}>
          <ListItem button>
            <ListItemText primary='Details' />
          </ListItem>
          <ListItem button>
            <ListItemText primary='log out' />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Setting;
