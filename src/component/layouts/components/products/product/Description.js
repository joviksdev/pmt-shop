import React from 'react';

// Material Ui/Core
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {
  grayColor,
  container,
  whiteColor
} from '../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container,
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  headerText: {
    color: grayColor[2],
    fontWeight: 'bold',
    fontSize: '16px'
  },
  content: {
    backgroundColor: whiteColor
  },
  text: {
    marginBottom: '0px',
    display: 'flex',
    color: grayColor[6],
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: '10px'
    }
  }
});

const Description = () => {
  const classes = styles();
  return (
    <div style={{ marginBottom: '10px', width: '100%' }}>
      <div
        style={{ paddingTop: '0px', paddingBottom: '0px' }}
        className={classes.container}
      >
        <Typography variant='h6' className={classes.headerText}>
          Description
        </Typography>
      </div>
      <div className={`${classes.container} ${classes.content}`}>
        <Grid container spacing={1}>
          decription
        </Grid>
      </div>
    </div>
  );
};

export default Description;
