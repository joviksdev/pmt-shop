import React from 'react';

// Material-UI/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

// Material-UI/Icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import {
  container,
  whiteColor,
  grayColor
} from '../../../../../assets/js/styleCss';

const styles = makeStyles({
  mainContainer: {
    backgroundColor: whiteColor,
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  container: {
    ...container,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  icon: {
    marginRight: '10px'
  },
  helpWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      lineHeight: 'initial !important'
    },
    '@media (min-width: 768px)': {
      '& .MuiSvgIcon-root': {
        marginRight: '5px'
      }
    }
  },
  helpIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: grayColor[6],

    '& span': {
      fontSize: '12px'
    }
  }
});

const Header = ({ decrementStep }) => {
  const classes = styles();

  // Handler to move back
  const navigateBack = () => {
    decrementStep();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIosIcon
            onClick={() => navigateBack()}
            className={classes.icon}
          />
          <Typography className={classes.headerText} variant='h6'>
            Checkout
          </Typography>
        </div>
        <div>
          <div className={classes.helpWrapper}>
            <div className={classes.helpIcon}>
              <ContactSupportIcon />
              <Hidden smUp implementation='css'>
                <span>Help</span>
              </Hidden>
            </div>
            <Hidden implementation='css' mdDown>
              <Typography>
                Need help?
                <br />
                <small>Please fill the contact us form</small>
              </Typography>
            </Hidden>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
