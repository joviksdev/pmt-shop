import React from 'react';

// Material-UI/Core
import Grid from '@material-ui/core/Grid';

// Material-UI/Icon
import PersonIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import {
  container,
  grayColor,
  defaultBoxShadow,
  whiteColor,
  primaryColor
} from '../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    backgroundColor: whiteColor
  },
  GridContainer: {
    ...container,
    marginTop: '10px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  imageWrapper: {
    position: 'relative',
    width: '100px',
    height: '100px',
    margin: 'auto',
    '& img': {
      width: '100%'
    }
  },
  profileImg: {
    fontSize: '100px',
    backgroundColor: grayColor[10],
    color: grayColor[6],
    borderRadius: '50%',
    padding: '5px',
    ...defaultBoxShadow
  },
  changeImg: {
    position: 'absolute',
    backgroundColor: primaryColor,
    color: whiteColor,
    borderRadius: '50%',
    padding: '5px',
    bottom: '10px',
    right: '0px'
  }
});

const User = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.GridContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.imageWrapper}>
              <PersonIcon className={classes.profileImg} />
              <PhotoCameraIcon className={classes.changeImg} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Typography>Emmanuel Tochukwu</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default User;
