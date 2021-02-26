import React from 'react';
// import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { transition, primaryColor } from '../../assets/js/styleCss';

const useStyles = makeStyles({
  input: {
    ...transition,
    '& .MuiInput-underline:after': {
      borderBottom: `2px solid ${primaryColor}`
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: `${primaryColor} !important`
    }
  }
});

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    id,
    target,
    label,
    isDisabled,
    onChange,
    type,
    placeholder,
    fullWidth,
    variant,
    endAdornment,
    startAdornment,
    style,
    value,
    helperText
  } = props;

  /*  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  });

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.underlineNone]: noUnderline
  });

  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });

  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

  var helpTextClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error
  });

  let newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined
  }; */

  return (
    <TextField
      ref={target}
      className={classes.input}
      id={id}
      disabled={isDisabled}
      label={label}
      style={style}
      fullWidth={fullWidth}
      placeholder={placeholder}
      value={value}
      type={type}
      helperText={helperText && helperText}
      variant={variant}
      onChange={onChange}
      InputProps={{
        startAdornment,
        endAdornment
      }}
    />
  );
}

CustomInput.propTypes = {};
