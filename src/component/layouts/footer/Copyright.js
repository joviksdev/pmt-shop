import React from 'react';

// Material-UI/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { container } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    textAlign: 'center',
    marginTop: '20px'
  },
  text: {
    fontSize: '13px'
  }
});

const Copyright = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant='body2'>
        Copyright @ {new Date().getFullYear()} PMT Store. All rights reserved.
      </Typography>
    </div>
  );
};

export default Copyright;
