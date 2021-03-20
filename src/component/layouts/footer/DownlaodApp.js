import React from 'react';
import SocialMediaLink from './SocialMediaLink';
import styles from './styles';

// Material-Ui/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Material-UI/Icon
import AppleIcon from '@material-ui/icons/Apple';
import AdbIcon from '@material-ui/icons/Adb';

const useStyles = makeStyles(styles);

const DownlaodApp = () => {
  const classes = useStyles();
  return (
    <div className={classes.subContainer}>
      <Typography className={classes.headerText} variant='h6'>
        Download app
      </Typography>
      <Grid style={{ maxWidth: '360px' }} container spacing={2}>
        <Grid xs={6} item>
          <div className={classes.gridItem}>
            <div>
              <AppleIcon className={classes.icon} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 'bold', fontSize: '14px' }}
                variant='h6'
              >
                App Store
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid xs={6} item>
          <div className={classes.gridItem}>
            <div>
              <AdbIcon className={classes.icon} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 'bold', fontSize: '14px' }}
                variant='h6'
              >
                Google play
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Box>
        <SocialMediaLink />
      </Box>
    </div>
  );
};

export default DownlaodApp;
