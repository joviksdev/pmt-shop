import React from 'react';
import CustomInput from '../customComponent/CustomInput';
import styles from './styles';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

// Material-UI/Icon
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(styles);

const NewsLetterSubcription = () => {
  const classes = useStyles();
  return (
    <div className={classes.subScriptionContainer}>
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
