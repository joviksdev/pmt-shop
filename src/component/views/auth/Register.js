import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../../layouts/customComponent/CustomInput';
import cx from 'classnames';
import Authbar from '../../layouts/header/Authbar';
import styles from './styles';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

// Material-UI/Icon
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(styles);

const Register = () => {
  const classes = useStyles();

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
          <Grid className={classes.gridItem} item xs={11} sm={8} md={6} lg={5}>
            <Typography className={classes.title} variant='h6'>
              Register
            </Typography>
            <form className={cx(classes.formContainer)}>
              <CustomInput
                style={{ marginBottom: '10px' }}
                label='First name'
                type='text'
                fullWidth={true}
              />
              <CustomInput
                style={{ marginBottom: '10px' }}
                label='Last name'
                type='text'
                fullWidth={true}
              />
              <CustomInput
                style={{ marginBottom: '10px' }}
                label='Email'
                type='email'
                fullWidth={true}
              />
              <CustomInput
                style={{ marginBottom: '10px' }}
                label='Password'
                type={isDisplayPassword ? 'text' : 'password'}
                fullWidth={true}
                endAdornment={
                  <InputAdornment position='end'>
                    {isDisplayPassword ? (
                      <VisibilityOffIcon
                        className={classes.visibilityIcon}
                        onClick={() => togglePassword()}
                      />
                    ) : (
                      <VisibilityIcon
                        className={classes.visibilityIcon}
                        onClick={() => togglePassword()}
                      />
                    )}
                  </InputAdornment>
                }
              />
              <CustomInput
                style={{ marginBottom: '10px' }}
                label='Phone number (optional)'
                type='text'
                fullWidth={true}
              />
              <Button className={classes.btn}>register</Button>
            </form>
            <Typography className={classes.text} variant='body2' paragraph>
              Already have an account?{' '}
              <Link className={classes.link} to='/auth/login'>
                log in.
              </Link>
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

export default Register;
