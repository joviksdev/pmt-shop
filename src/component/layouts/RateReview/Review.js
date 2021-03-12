import React from 'react';
import CustomInput from '../../customComponent/CustomInput';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  container,
  primaryColor,
  whiteColor,
  grayColor
} from '../../../assets/js/styleCss';

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
    marginBottom: '10px',
    color: grayColor[6]
  },
  form: {
    backgroundColor: whiteColor,
    padding: '8px',
    borderRadius: '5px'
  },
  btn: {
    textTransform: 'capitalize',
    width: '100%',
    backgroundColor: primaryColor,
    color: whiteColor,
    marginTop: '10px',
    '&:hover': {
      backgroundColor: primaryColor,
      opacity: '0.8'
    }
  }
});

const Review = props => {
  const { handleOnSubmit, reviewDetails, setReviewDetails } = props;

  const { name, message } = reviewDetails;
  const classes = styles();

  return (
    <div>
      <div className={classes.container}>
        <Typography className={classes.headerText} variant='h6'>
          Review
        </Typography>
        <form onSubmit={e => handleOnSubmit(e)} className={classes.form}>
          <CustomInput
            style={{ marginBottom: '10px' }}
            label={'Name'}
            value={name}
            fullWidth={true}
            variant='outlined'
            onChange={e => {
              setReviewDetails({
                ...reviewDetails,
                name: e.target.value
              });
            }}
          />
          <CustomInput
            label={'Drop review'}
            fullWidth={true}
            value={message}
            multiline={true}
            rows={3}
            variant='outlined'
            onChange={e => {
              setReviewDetails({
                ...reviewDetails,
                message: e.target.value
              });
            }}
          />
          <Button className={classes.btn} type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Review;
