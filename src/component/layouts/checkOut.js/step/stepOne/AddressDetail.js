import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Material-Ui/Icon
import EditIcon from '@material-ui/icons/Edit';

import {
  container,
  primaryColor,
  whiteColor,
  grayColor
} from '../../../../assets/js/styleCss';
import { Hidden } from '@material-ui/core';

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
  addressContainer: {
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
  btnInitColor: {
    color: grayColor[9]
  },
  btnSelected: {
    color: primaryColor
  }
});

const RateItem = props => {
  const classes = styles();

  return (
    <div>
      <div className={classes.container}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography className={classes.headerText} variant='h6'>
            Address Details
          </Typography>
          <div>
            <Button className={classes.btn}>
              <EditIcon />
              <Hidden mdDown implementation='css'>
                <span>Edit</span>
              </Hidden>
            </Button>
          </div>
        </Box>
        <div className={classes.addressContainer}>
          <Typography
            style={{ marginBottom: '5px' }}
            className={classes.text}
            variant='body1'
          >
            Emmanuel Tochukwu
          </Typography>
          <Typography className={classes.text} variant='body2'>
            40, Industrial Layout, Emene, Enugu, Nigeria
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RateItem;
