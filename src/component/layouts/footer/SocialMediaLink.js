import React from 'react';
import styles from './styles';

// Material-UI/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Material-UI/Icon
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(styles);

const SocialMediaLink = () => {
  const classes = useStyles();
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
