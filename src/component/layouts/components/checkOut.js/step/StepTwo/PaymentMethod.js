import React from 'react';
import mastercard from '../../../../../assets/img/mastercard.svg';
import visacard from '../../../../../assets/img/visa.svg';
import verve from '../../../../../assets/img/verve.svg';
import CustomInput from '../../../../customComponent/CustomInput';
import CustomCheckbox from '../../../../customComponent/CustomCheckbox';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Material-Ui/Icon

import {
  container,
  primaryColor,
  whiteColor,
  grayColor
} from '../../../../../assets/js/styleCss';

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
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: grayColor[6]
  },
  text: {
    marginBottom: '0px',
    color: grayColor[6]
  },

  paymentContainer: {
    backgroundColor: whiteColor,
    padding: '10px'
  },
  btn: {
    padding: '5px',
    minWidth: 'initial !important',
    textTransform: 'capitalize',
    width: '100%',
    backgroundColor: primaryColor,
    color: whiteColor,
    '& .MuiSvgIcon-root': {
      fontSize: '18px'
    },
    '& span': {
      fontSize: '14px',
      marginRight: '5px'
    }
  },
  imgWrapper: {
    width: '50px',
    height: '50px',
    border: `1px solid ${grayColor[10]}`,
    borderRadius: '5px',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%'
    }
  }
});

const PaymentMethod = props => {
  const classes = styles();

  return (
    <div>
      <div className={classes.container}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography className={classes.headerText} variant='h6'>
            Payment Method
          </Typography>
        </Box>
        <div className={classes.paymentContainer}>
          <Typography variant='h6' className={classes.title}>
            Suuported Card
          </Typography>
          <Box display='flex'>
            <div style={{ marginRight: '10px' }} className={classes.imgWrapper}>
              <img src={mastercard} alt='mastercard' />
            </div>
            <div style={{ marginRight: '10px' }} className={classes.imgWrapper}>
              <img src={visacard} alt='visacard' />
            </div>
            <div className={classes.imgWrapper}>
              <img src={verve} alt='vervecard' />
            </div>
          </Box>
          <div style={{ marginTop: '10px' }}>
            <form>
              <CustomInput
                style={{ marginBottom: '10px', marginTop: '5px' }}
                placeholder='Card Holder Name'
                fullWidth={true}
              />
              <CustomInput
                style={{ marginBottom: '10px' }}
                placeholder='Card Number'
                fullWidth={true}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CustomInput placeholder='Expires' fullWidth={true} />
                </Grid>
                <Grid item xs={6}>
                  <CustomInput placeholder='CV' fullWidth={true} />
                </Grid>
              </Grid>
              <CustomCheckbox style={{ margin: '10px 0' }} label='Save card' />
              <Button type='submit' className={classes.btn}>
                Confirm
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
