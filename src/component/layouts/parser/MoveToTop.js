import React, { useState } from 'react';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Material-UI/Icon
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import {
  primaryColor,
  whiteColor,
  defaultBoxShadow
} from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    position: 'fixed',
    bottom: '10%',
    right: '10%',
    zIndex: '20000'
  },
  btn: {
    padding: '10px !important',
    minWidth: 'unset !important',
    backgroundColor: primaryColor,
    color: whiteColor,
    ...defaultBoxShadow,
    '&:hover': {
      backgroundColor: primaryColor
    }
  }
});

const MoveToTop = () => {
  const classes = styles();

  const [isDisplay, setIsDisplay] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      setIsDisplay(true);
    } else {
      setIsDisplay(false);
    }
  });

  const scrollTop = () => {
    console.log('click');
    
  };

  return (
    isDisplay && (
      <div className={classes.container}>
        <Button onClick={() => scrollTop()} className={classes.btn}>
          <KeyboardArrowUpIcon />
        </Button>
      </div>
    )
  );
};

export default MoveToTop;
