import React from 'react';
import styles from './styles';

// Material-Ui/Core
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);

const ListWrapper = props => {
  const { data } = props;
  const classes = useStyles();
  return (
    <div className={classes.subContainer}>
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
