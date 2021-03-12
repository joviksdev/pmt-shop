import React from 'react';
import cx from 'classnames';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Material-Ui/Icon
import StarIcon from '@material-ui/icons/Star';

import {
  container,
  primaryColor,
  whiteColor,
  grayColor
} from '../../../assets/js/styleCss';

const styles = makeStyles({
  container: {
    ...container
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: primaryColor
  },
  text: {
    marginBottom: '10px',
    color: grayColor[6]
  },
  ratingContainer: {
    backgroundColor: whiteColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    height: '100px'
  },
  btn: {
    padding: '5px',
    minWidth: 'initial !important'
  },
  btnInitColor: {
    color: grayColor[9]
  },
  btnSelected: {
    color: primaryColor
  }
});

const RateItem = props => {
  const { handleRating, rating } = props;
  const classes = styles();

  const btn = cx(classes.btn, classes.btnInitColor);

  const rates = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className={classes.container}>
        <Typography className={classes.headerText} variant='h6'>
          Rate Item
        </Typography>
        <div className={classes.ratingContainer}>
          <Typography className={classes.text} variant='body2'>
            Tap the star to rate
          </Typography>
          <div>
            {rates.map(rate => (
              <Button
                onClick={() => handleRating(rate)}
                key={rate}
                id={rate}
                className={`${btn} ${rating >= rate && classes.btnSelected}`}
              >
                <StarIcon />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateItem;
