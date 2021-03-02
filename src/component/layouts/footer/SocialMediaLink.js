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
  primaryColor,
  grayColor
} from '../../assets/js/styleCss';

const styles = makeStyles({
  svgIcon: {
    minWidth: 'initial !important',
    padding: '8px',
    borderRadius: '50%',
    margin: '0 10px',
    fontSize: '14px',
    color: grayColor[9],
    backgroundColor: grayColor[7],
    ...defaultBoxShadow,
    '&:hover': {
      backgroundColor: primaryColor
    }
  }
});

const SocialMediaLink = () => {
  const classes = styles();
  return (
    <div style={{ marginTop: '10px' }}>
      <Typography style={{ marginBottom: '10px' }} variant='body2'>
        Stay connected
      </Typography>
      <div>
        <Button className={`${classes.svgIcon}`}>
          <FacebookIcon />
        </Button>
        <Button className={`${classes.svgIcon}`}>
          <TwitterIcon />
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaLink;
