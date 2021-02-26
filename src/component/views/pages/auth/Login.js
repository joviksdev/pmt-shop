import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CustomInput from '../../../layouts/customComponent/CustomInput';
import cx from 'classnames';
import Authbar from '../../../layouts/header/Authbar';

import {
  btn,
  container,
  grayColor,
  primaryColor,
  whiteColor,
  blueColor,
  defaultBoxShadow
} from '../../../assets/js/styleCss';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

// Material-UI/Icon
import Email from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = makeStyles({
  container: {
    ...container,
    flex: '1',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    margin: 'auto',
  },

  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)'
  },
  showcase: {
    backgroundColor: primaryColor
  },
  title: {
    textAlign: 'center',
    color: primaryColor,
    marginBottom: '20px',
    textTransform: 'uppercase'
  },
  text: {
    textAlign: 'center',
    margin: '15px 0px',
    color: grayColor[6],
    '& span': {
      color: primaryColor
    }
  },
  btn: {
    ...btn,
    color: whiteColor,
    backgroundColor: primaryColor,
    width: '100%'
  },
  option: {
    textAlign: 'center',
    width: '70%',
    margin: '20px auto',
    color: grayColor[6],
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '45%',
      height: '2px',
      backgroundColor: grayColor[9]
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '45%',
      height: '2px',
      backgroundColor: grayColor[9]
    }
  },
  link: {
    color: primaryColor,
    textDecoration: 'none',
    listStyle: 'none'
  },
  svgIcon: {
    minWidth: 'initial !important',
    padding: '8px',
    borderRadius: '50%',
    margin: '0 15px',
    color: primaryColor,
    ...defaultBoxShadow
  },
  blueColor: {
    color: blueColor
  },
  skyblue: {
    color: 'skyblue'
  }
});

const Login = () => {
  const classes = styles();
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation('');
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  // Target Pasword Input
  const [isDisplayPassword, setIsDisplayPassword] = useState(false);

  // Toggle Password
  const togglePassword = () => {
    setIsDisplayPassword(!isDisplayPassword);
  };

  return (
    <>
      <Authbar />
      <div className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid className={classes.gridItem} item xs={11} sm={8} md={6}>
            <Typography className={classes.title} variant='h4'>
              Log in
            </Typography>
            <form className={cx(classes.formContainer, classes[cardAnimaton])}>
              <CustomInput
                style={{ marginBottom: '10px' }}
                label='Email'
                type='email'
                fullWidth={true}
                startAdornment={
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                }
              />
              <CustomInput
                style={{ marginBottom: '10px' }}
                label='Password'
                type={isDisplayPassword ? 'text' : 'password'}
                fullWidth={true}
                startAdornment={
                  <InputAdornment position='start'>
                    <LockIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <VisibilityIcon onClick={() => togglePassword()} />
                  </InputAdornment>
                }
              />
              <Button className={classes.btn}>Login</Button>
            </form>
            <Typography className={classes.text} variant='body2' paragraph>
              Don't have an account? <Link className={classes.link} to='/auth/register'>Sign up now.</Link>
            </Typography>
            <Typography className={classes.option} variant='body2' paragraph>
              or
            </Typography>
            <Typography className={classes.text} variant='body2' paragraph>
              Create with social media
            </Typography>
            <div style={{ textAlign: 'center' }}>
              <Button className={`${classes.svgIcon} ${classes.blueColor}`}>
                <FacebookIcon />
              </Button>
              <Button className={`${classes.svgIcon} ${classes.skyblue}`}>
                <TwitterIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Login;
