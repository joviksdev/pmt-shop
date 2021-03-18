import React from 'react';

// Material-UI/Core
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Material-UI/Icon
import CloseIcon from '@material-ui/icons/Close';

import {
  dangerColor,
  grayColor,
  primaryColor,
  whiteColor
} from '../../../assets/js/styleCss';

const styles = makeStyles({
  drawer: {
    width: '280px !important',
    height: '100%',
    color: grayColor[2],
    backgroundColor: whiteColor,
    padding: '10px',
    '@media (min-width: 768px)': {
      width: '620px !important'
    },
    '@media (min-width: 992px)': {
      width: '920px  !important'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    textTransform: 'capitalize',
    color: grayColor[2],
    display: 'flex',
    lineHeight: 'initial !important',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  headerBtn: {
    lineHeight: 'initial !important',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: primaryColor
  },
  closeIcon: {
    color: dangerColor[0],
    marginRight: '10px'
  }
});

const Filter = props => {
  const classes = styles();
  const { hideFilter, isDisplayFilter } = props;

  return (
    <Drawer
      style={{ zIndex: '20000' }}
      variant='temporary'
      anchor={'left'}
      open={isDisplayFilter}
      onClose={() => hideFilter()}
      ModalProps={{
        keepMounted: true
      }}
    >
      <div className={classes.drawer}>
        <div className={classes.header}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CloseIcon
              onClick={() => hideFilter()}
              className={classes.closeIcon}
            />
            <Typography className={classes.headerText} variant='h6'>
              Filter
            </Typography>
          </div>
          <Button className={classes.headerBtn}>apply filter</Button>
        </div>
        <div>Filter</div>
      </div>
    </Drawer>
  );
};

export default Filter;