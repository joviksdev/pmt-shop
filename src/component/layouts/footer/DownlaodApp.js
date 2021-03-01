import React from 'react';

// Material-Ui/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Material-UI/Icon
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import { defaultBoxShadow, grayColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    marginTop: '20px',
    '@media (min-width: 760px)': {
      marginTop: '0px',
      padding: '8px'
    }
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    borderRadius: '5px',
    backgroundColor: grayColor[7],
    ...defaultBoxShadow
  },
  icon: {
    fontSize: '36px',
    marginRight: '5px'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: '18px',
    textTransform: 'uppercase',
    marginBottom: '5px',
    color: grayColor[6]
  },
  text: {
    marginBottom: '0px',
    fontSize: '12px'
  }
});

const DownlaodApp = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography className={classes.headerText} variant='h6'>
        Download app
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={6} item>
          <div className={classes.gridItem}>
            <div>
              <AppleIcon className={classes.icon} />
            </div>
            <div>
              <Typography className={classes.text} variant='body2' paragraph>
                Download on
              </Typography>
              <Typography
                style={{ fontWeight: 'bold', fontSize: '16px' }}
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
              <AndroidIcon className={classes.icon} />
            </div>
            <div>
              <Typography className={classes.text} variant='body2' paragraph>
                Download on
              </Typography>
              <Typography
                style={{ fontWeight: 'bold', fontSize: '16px' }}
                variant='h6'
              >
                Google play
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DownlaodApp;
