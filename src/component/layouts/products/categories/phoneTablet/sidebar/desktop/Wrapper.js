import React, { useState } from 'react';
import cx from 'classnames';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// MAterial-UI/Icon
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {
  grayColor,
  primaryColor,
  transition
} from '../../../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    padding: '10px 0px'
  },
  borderBottom: {
    borderBottom: `1px solid ${grayColor[10]}`
  },
  headerText: {
    color: grayColor[2],
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  dropDownIcon: {
    ...transition
  },
  rotateSvg: {
    transform: 'rotate(180deg)'
  },
  list: {
    padding: '0px',
    '& .MuiFormGroup-root': {
      margin: '0px'
    },
    '& .MuiFormControlLabel-root': {
      margin: '0px'
    },
    '& .MuiButtonBase-root': {
      padding: '5px 0px',
      marginRight: '10px'
    },
    '& .MuiButtonBase-root.Mui-checked': {
      color: primaryColor
    },
    '& .MuiTypography-root': {
      fontSize: '14px !important'
    },
    '& .MuiSvgIcon-root': {
      width: '16px',
      height: '16px'
    }
  },
  submitBtn: {
    color: grayColor[2],
    '&:hover': {
      color: primaryColor
    }
  }
});

const Wrapper = props => {
  const { headerText, lists, Component, isBorderBottom } = props;
  const classes = styles();

  // Display State
  const [isDisplay, setIsDisplay] = useState(true);
  const displayMore = () => setIsDisplay(!isDisplay);

  const rotateSvg = cx({ [classes.rotateSvg]: isDisplay });

  const borderBottom = cx({ [classes.borderBottom]: isBorderBottom });

  return (
    <div className={` ${classes.container} ${borderBottom}`}>
      <Box
        onClick={() => displayMore()}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography variant='h6' className={classes.headerText}>
          {headerText}
        </Typography>
        <div>
          <ArrowDropDownIcon
            className={`${classes.dropDownIcon} ${rotateSvg}`}
          />
        </div>
      </Box>
      <div>
        <Collapse in={isDisplay}>
          {Component && (
            <div style={{ marginBottom: '5px' }}>
              <Component />
            </div>
          )}
          <div>
            <RadioGroup className={classes.list}>
              {lists.map((brand, key) => (
                <FormControlLabel
                  key={key}
                  value={brand}
                  control={<Radio />}
                  label={brand}
                />
              ))}
            </RadioGroup>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Wrapper;
