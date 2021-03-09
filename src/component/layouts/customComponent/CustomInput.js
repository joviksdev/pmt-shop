import React from 'react';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { transition, primaryColor, whiteColor } from '../../assets/js/styleCss';

const useStyles = makeStyles({
  input: {
    ...transition,
    '& .MuiInput-underline:after': {
      borderBottom: `2px solid ${primaryColor}`
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: `${primaryColor} !important`
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: `${primaryColor} !important`
    },
    '& .MuiOutlinedInput-input': {
      padding: '14px'
    },
    '& .MuiInputLabel-formControl': {
      top: '0px'
    },
    '& .MuiInputLabel-formControl.Mui-focused': {
      top: '1px !important'
    },
    '& .MuiOutlinedInput-multiline': {
      padding: '0px !important'
    }
  },
  backgroundColor: {
    '& .MuiInputBase-input': {
      backgroundColor: whiteColor,
      borderRadius: '5px'
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
    multiline,
    rows,
    variant,
    backgroundColor,
    endAdornment,
    startAdornment,
    style,
    value,
    helperText
  } = props;

  const bgClasses = classNames({
    [classes.backgroundColor]: backgroundColor
  });

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
      className={`${classes.input} ${bgClasses}`}
      id={id}
      disabled={isDisabled}
      label={label}
      style={style}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
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
