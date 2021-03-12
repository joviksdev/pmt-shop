import React, { useState, useEffect } from 'react';
import cx from 'classnames';

// Material UI/Core
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Material UI/Icon
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import {
  whiteColor,
  dangerColor,
  successColor
} from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    position: 'absolute',
    zIndex: '24000',
    left: '0px',
    top: '15px',
    transition: 'transform 400ms',
    transform: 'translateY(-120px)',
    width: '100%'
  },
  transform: {
    transform: 'translateY(0px)'
  },
  content: {
    margin: 'auto',
    position: 'relative',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  },
  text: {
    marginBottom: '0px'
  },
  danger: {
    backgroundColor: dangerColor[0]
  },
  success: {
    backgroundColor: successColor[1]
  },
  closeBtn: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    color: dangerColor[0],
    backgroundColor: whiteColor,
    padding: '4px',
    borderRadius: '50%',
    border: `2px solid ${dangerColor[0]}`,
    cursor: 'pointer'
  }
});

let alertType = '',
  alertMsg = '';

export const setToastAlert = ({ type, msg }) => {
  alertType = type;
  alertMsg = msg;
};

const ToastAlert = () => {
  const [msg, setMsg] = useState('');

  useEffect(
    () => {
      if (alertMsg) {
        setMsg(alertMsg);
      }
    },
    // eslint-disable-next-line
    [alertMsg]
  );

  const classes = styles();
  const container = cx(classes.container, {
    [classes.transform]: msg && true
  });
  const content = cx(
    classes.content,
    { [classes.danger]: alertType === 'error' && true },
    { [classes.success]: alertType === 'success' && true }
  );
  return (
    <div className={container}>
      <Grid container>
        <Grid className={content} item xs={10} md={8}>
          <CloseRoundedIcon
            onClick={() => setMsg('')}
            className={classes.closeBtn}
          />
          <Typography className={classes.text} variant='body2' paragraph>
            {msg}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ToastAlert;
