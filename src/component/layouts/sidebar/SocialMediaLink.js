import React from 'react';

// Material-UI/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Material-UI/Icon
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import {
  defaultBoxShadow,
  blueColor,
  primaryColor
} from '../../assets/js/styleCss';

const styles = makeStyles({
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

const SocialMediaLink = () => {
  const classes = styles();
  return (
    <div style={{ marginTop: '10px' }}>
      <Typography style={{ textAlign: 'center', marginBottom: '10px' }}>
        Stay connected
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <Button className={`${classes.svgIcon} ${classes.blueColor}`}>
          <FacebookIcon />
        </Button>
        <Button className={`${classes.svgIcon} ${classes.skyblue}`}>
          <TwitterIcon />
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaLink;
