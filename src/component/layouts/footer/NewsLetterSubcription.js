import React from 'react';
import CustomInput from '../customComponent/CustomInput';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

// Material-UI/Icon
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import {
  container,
  grayColor,
  primaryColor,
  whiteColor
} from '../../assets/js/styleCss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles({
  container: {
    backgroundColor: grayColor[4],
    padding: '20px 0px',
    color: grayColor[2]
  },
  gridContainer: {
    ...container,
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    maxWidth: '600px',
    display: 'flex',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: primaryColor,
    color: whiteColor,
    marginLeft: '5px',
    '&:hover': {
      backgroundColor: primaryColor
    }
  },
  headerText: {
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  text: {
    '@media (min-width: 760px)': {
      marginBottom: '0px'
    }
  }
});

const NewsLetterSubcription = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <Typography className={classes.headerText} variant='h6'>
            Get latest update
          </Typography>
          <Typography className={classes.text} variant='body2' paragraph>
            Subscribe to our newsletter to get updates on our latest offers!
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <form className={classes.form}>
            <CustomInput
              placeholder='Email address'
              variant='outlined'
              type='email'
              backgroundColor={true}
              fullWidth={true}
            />
            <Button className={classes.btn}>
              <SendIcon />
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewsLetterSubcription;
