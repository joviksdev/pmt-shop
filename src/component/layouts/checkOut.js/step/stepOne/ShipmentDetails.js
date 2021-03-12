import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Material-Ui/Icon
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import {
  container,
  primaryColor,
  whiteColor,
  grayColor
} from '../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    marginTop: '10px'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: primaryColor
  },
  text: {
    marginBottom: '0px',
    color: grayColor[6]
  },
  shipmentContainer: {
    backgroundColor: whiteColor,
    padding: '10px'
  },
  btn: {
    padding: '5px',
    minWidth: 'initial !important',
    textTransform: 'capitalize',
    '& .MuiSvgIcon-root': {
      fontSize: '18px'
    },
    '& span': {
      fontSize: '14px',
      marginRight: '5px'
    }
  },
  list: {
    padding: '0px',
    '& .MuiListItem-root': {
      padding: '0px'
    }
  },
  checkIcon: {
    fontSize: '14px',
    color: primaryColor
  },
  amountText: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3px'
  },
  subTotal: {
    borderBottom: `1px solid ${grayColor[9]}`,
    marginTop: '10px'
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '10px 0px'
  }
});

const ShipmentDetails = props => {
  const classes = styles();

  return (
    <div>
      <div className={classes.container}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography className={classes.headerText} variant='h6'>
            Shipment details
          </Typography>
        </Box>
        <div className={classes.shipmentContainer}>
          <List className={classes.list}>
            <ListItem alignItems='flex-start' button>
              <span style={{ marginRight: '10px' }}>
                <CheckCircleIcon className={classes.checkIcon} />
              </span>
              <span>
                Samsung Galaxy S9 Plus (S9+) 6.2-Inch QHD (6GB, 64GB ROM Android
                9.0 Pie, 12MP + 8MP) Single SIM 4G Smartphone
              </span>
            </ListItem>
          </List>
          <div className={classes.subTotal}>
            <Typography
              className={classes.amountText}
              variant='body1'
              paragraph
            >
              <span>Subtotal</span>
              <span> &#8358; {'  '}400000</span>
            </Typography>
            <Typography
              className={classes.amountText}
              variant='body1'
              paragraph
            >
              <span>Shipping Fee</span>
              <span> &#8358; {'  '}1500</span>
            </Typography>
          </div>
          <div>
            <Typography className={classes.total} variant='h6'>
              <span>Total</span>
              <span> &#8358; {'  '}401500</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
