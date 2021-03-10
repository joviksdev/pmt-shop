import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

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
  grayColor,
  primaryColor
} from '../../../assets/js/styleCss';

const styles = makeStyles({
  mainContainer: {
    backgroundColor: whiteColor,
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  container: {
    ...container,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    textTransform: 'uppercase',
    color: primaryColor,
    fontFamily: '"Montserrat", serif',
    fontWeight: '900',
    display: 'flex',
    fontSize: '18px',

    '@media (min-width: 768px)': {
      '& span': {
        fontSize: '30px',
        fontWeight: '900'
      }
    },
    '@media (min-width: 960px)': {
      '& span': {
        fontSize: '34px',
        fontWeight: '900'
      }
    }
  },
  appLogo: {
    width: '18px',
    marginRight: '5px',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      display: 'block',
      width: '100%',
      verticalAlign: 'middle'
    },
    '@media (min-width: 768px)': {
      width: '22px'
    },
    '@media (min-width: 960px)': {
      width: '25px'
    }
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

const Header = () => {
  const classes = styles();

  // Handler to move back
  const navigateBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIosIcon
            onClick={() => navigateBack()}
            className={classes.icon}
          />
          <Link to='/'>
            <Typography
              className={classes.headerText}
              variant='h5'
              component='h2'
            >
              <div className={classes.appLogo}>
                <img src={logo} alt='app logo' />
              </div>
              <span> PMT Store</span>
            </Typography>
          </Link>
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
                <small>Page not found, contact support</small>
              </Typography>
            </Hidden>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
