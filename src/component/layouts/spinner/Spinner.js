import React from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { container, primaryColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 768px)': {
      width: '140px !important',
      height: '140px !important'
    },
    '@media (min-width: 992px)': {
      width: '160px  !important',
      height: '160px  !important'
    },
    '@media (min-width: 1200px)': {
      width: '180px  !important',
      height: '180px  !important'
    },
    margin: 'auto'
  },
  icon: {
    color: primaryColor
  }
});

const Spinner = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <CircularProgress className={classes.icon} />
    </div>
  );
};

export default Spinner;
