import React from 'react';

// Material Ui/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Material-UI/Icon
import StarRateIcon from '@material-ui/icons/StarRate';

import {
  grayColor,
  whiteColor,
  primaryColor
} from '../../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    padding: '0px',
    margin: 'auto'
  },
  headerText: {
    color: primaryColor,
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '14px'
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
      fontSize: '18px',
      verticalAlign: 'middle',
      color: primaryColor
    }
  }
});

const CustomerReview = () => {
  const classes = styles();
  return (
    <div style={{ marginBottom: '10px', width: '100%' }}>
      <div className={`${classes.container} `}>
        <Typography variant='h6' className={classes.headerText}>
          Customer review
        </Typography>
        <div>
          <Typography className={classes.text} paragraph variant='body2'>
            <span style={{ marginRight: '10px' }}>Anonymous</span>
            <span>
              <StarRateIcon />
              <StarRateIcon />
            </span>
          </Typography>
          <Typography style={{ marginBottom: '3px' }} variant='body1' paragraph>
            I love this item
          </Typography>
          <Typography
            style={{ marginBottom: '0px' }}
            variant='body2'
            paragraph
            color='textSecondary'
          >
            {new Date().toLocaleString()}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
