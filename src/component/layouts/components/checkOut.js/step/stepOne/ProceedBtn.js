import React from 'react';

// Material-UI/Core
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  primaryColor,
  whiteColor,
  container
} from '../../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    marginTop: '10px'
  },
  btn: {
    textTransform: 'capitalize',
    color: whiteColor,
    backgroundColor: primaryColor,
    width: '100%'
  }
});

const ProceedBtn = ({ incrementStep }) => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Button onClick={() => incrementStep()} className={classes.btn}>
        Process to next step
      </Button>
    </div>
  );
};

export default ProceedBtn;
