import React from 'react';
import RatingList from './RatingList';

// Material Ui/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {
  grayColor,
  whiteColor,
  primaryColor
} from '../../../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    padding: '0px',
    margin: 'auto',
    width: 'initial !important',
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
      marginRight: '10px'
    }
  }
});

const ProductRating = () => {
  const classes = styles();
  return (
    <div style={{ marginBottom: '10px', width: '100%' }}>
      <div className={`${classes.container} `}>
        <Typography variant='h6' className={classes.headerText}>
          Product rating
        </Typography>
        <div>
          <Typography>
            450 <span>ratings</span>
          </Typography>
          <RatingList />
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
