import React from 'react';

// Material-UI/Core
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI/Icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { container, whiteColor } from '../../assets/js/styleCss';

const styles = makeStyles({
  mainContainer: {
    backgroundColor: whiteColor,
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  container: {
    ...container,
    display: 'flex',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  icon: {
    marginRight: '10px'
  }
});

const Header = () => {
  const classes = styles();

  // Handler to move back
  const navigateBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <ArrowBackIosIcon
          onClick={() => navigateBack()}
          className={classes.icon}
        />
        <Typography className={classes.headerText} variant='h6'>
          Rate and Review
        </Typography>
      </div>
    </div>
  );
};

export default Header;
