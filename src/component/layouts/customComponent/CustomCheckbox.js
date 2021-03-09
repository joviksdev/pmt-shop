import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { primaryColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  checkbox: {
    padding: '0px',
    '&.Mui-checked': {
      color: primaryColor
    }
  }
});

const CustomCheckbox = props => {
  const classes = styles();
  const { label, style } = props;
  return (
    <div style={style} className={classes.container}>
      <Checkbox className={classes.checkbox} />
      <Typography>{label}</Typography>
    </div>
  );
};

export default CustomCheckbox;
