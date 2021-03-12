import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Material-UI/Icon
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import {
  container,
  primaryColor,
  whiteColor
} from '../../assets/js/styleCss';

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
    },
    '& .MuiSvgIcon-root': {
      marginRight: '10px'
    }
  }
});

const Wallet = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography className={classes.headerText} variant='h6'>
        My Wallet
      </Typography>
      <div className={classes.content}>
        <List className={classes.list}>
          <ListItem button>
            <AccountBalanceWalletIcon />
            <ListItemText primary={<span> &#8358; {'  '}30000</span>} />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Wallet;
