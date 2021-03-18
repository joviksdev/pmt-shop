import React from 'react';
import SortFilter from './SortFilter';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {
  container,
  grayColor,
  whiteColor
} from '../../../../assets/js/styleCss';

const styles = makeStyles({
  main: {
    backgroundColor: whiteColor,
    margin: '10px  0',
    padding: '5px'
  },
  container: {
    ...container
  },
  displayFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (min-width: 760px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },
  header: {
    fontWeight: 'bold',
    fontSize: '16px',
    textTransform: 'capitalize',
    textAlign: 'center',
    color: grayColor[2]
  }
});

const SubHeader = props => {
  const classes = styles();
  const { headerText } = props
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.displayFlex}>
          <Typography className={classes.header} variant='h6'>
            {headerText}
          </Typography>
          <SortFilter {...props} />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
