import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Material-Ui/Icon
import WarningIcon from '@material-ui/icons/Warning';

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
  deliveryContainer: {
    backgroundColor: whiteColor,
    padding: '10px'
  },
  details: {
    border: `1px solid ${grayColor[10]}`,
    padding: '10px',
    borderRadius: '5px'
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
  radioBtn: {
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: primaryColor
    }
  },
  icon: {
    fontSize: '16px',
    color: primaryColor
  },
  list: {
    padding: '0px'
  },
  listItem: {
    padding: '0px'
  }
});

const DeliveryMethod = props => {
  const classes = styles();

  return (
    <div>
      <div className={classes.container}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography className={classes.headerText} variant='h6'>
            Delivery Method
          </Typography>
        </Box>
        <div className={classes.deliveryContainer}>
          <RadioGroup>
            <div>
              <FormControlLabel
                className={classes.radioBtn}
                value='expree delivery'
                control={<Radio />}
                label='Express Delivery'
              />
              <Grid className={classes.details} container>
                <Grid item xs={1}>
                  <WarningIcon className={classes.icon} />
                </Grid>
                <Grid item xs={11}>
                  <List className={classes.list}>
                    <ListItem
                      style={{ marginBottom: '5px' }}
                      alignItems='flex-start'
                      className={classes.listItem}
                      button
                    >
                      <span style={{ marginRight: '5px' }}>*</span>
                      <span>
                        Large items (e.g. Freezers) may arrive 2 business days
                        later than other products
                      </span>
                    </ListItem>
                    <ListItem
                      alignItems='flex-start'
                      className={classes.listItem}
                      button
                    >
                      <span style={{ marginRight: '5px' }}>*</span>
                      <span>
                        Kindly confirm your delivery address is accessible
                        before placing your order
                      </span>
                    </ListItem>
                    <ListItem
                      style={{ marginBottom: '5px' }}
                      alignItems='flex-start'
                      className={classes.listItem}
                      button
                    >
                      <span style={{ marginRight: '5px' }}>*</span>
                      <span>
                        The International Shipping and custom Fee is
                        NON-REFUNDABLE in case of a return
                      </span>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </div>

            <div>
              <FormControlLabel
                className={classes.radioBtn}
                value='pickup station'
                control={<Radio />}
                label='Pickup Station'
              />
              <Grid className={classes.details} container>
                <Grid item xs={1}>
                  <WarningIcon className={classes.icon} />
                </Grid>
                <Grid item xs={11}>
                  <List className={classes.list}>
                    <ListItem
                      style={{ marginBottom: '5px' }}
                      alignItems='flex-start'
                      className={classes.listItem}
                      button
                    >
                      <span style={{ marginRight: '5px' }}>*</span>
                      <span>Select a suitable Pickup location</span>
                    </ListItem>
                    <ListItem
                      alignItems='flex-start'
                      className={classes.listItem}
                      button
                    >
                      <span style={{ marginRight: '5px' }}>*</span>
                      <span>Cheaper shipping fees</span>
                    </ListItem>
                    <ListItem
                      style={{ marginBottom: '5px' }}
                      alignItems='flex-start'
                      className={classes.listItem}
                      button
                    >
                      <span style={{ marginRight: '5px' }}>*</span>
                      <span>Scheduled pickup at your own convenience</span>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethod;
