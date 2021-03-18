import React from 'react';

// Material-Ui/Core
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { grayColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    marginTop: '20px',
    '@media (min-width: 760px)': {
      marginTop: '0px'
    }
  },
  headerText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: grayColor[6],
    fontSize: '14px'
  },
  list: {
    padding: '0px',
    '& li': {
      padding: '0px'
    }
  }
});

const ListWrapper = props => {
  const { data } = props;
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography className={classes.headerText} variant='h6'>
        {data.headerText}
      </Typography>
      <List className={classes.list}>
        {data.list.map((list, key) => (
          <ListItem key={key} className={classes.item}>
            <ListItemText primary={list.name} disableTypography={true} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListWrapper;
