import React, { useContext } from 'react';
import AppContext from '../../../../context/app/appContext';
import logo from '../../../assets/img/logo.png';
import SubCategoryLink from './SubCategoryLink';

// Material-UI/Core
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Material-UI/Icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { primaryColor, whiteColor } from '../../../assets/js/styleCss';

const styles = makeStyles({
  drawer: {
    width: '280px !important',
    height: '100%',
    color: primaryColor,
    backgroundColor: whiteColor,
    padding: '10px',
    '@media (min-width: 768px)': {
      width: '620px !important'
    },
    '@media (min-width: 992px)': {
      width: '920px  !important'
    }
  },
  headerText: {
    textTransform: 'uppercase',
    color: primaryColor,
    fontFamily: '"Montserrat", serif',
    fontWeight: '900',
    display: 'flex',
    fontSize: '18px',

    '@media (min-width: 768px)': {
      '& span': {
        fontSize: '30px',
        fontWeight: '900'
      }
    },
    '@media (min-width: 960px)': {
      '& span': {
        fontSize: '34px',
        fontWeight: '900'
      }
    }
  },
  appLogo: {
    width: '18px',
    marginRight: '5px',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      display: 'block',
      width: '100%',
      verticalAlign: 'middle'
    },
    '@media (min-width: 768px)': {
      width: '22px'
    },
    '@media (min-width: 960px)': {
      width: '25px'
    }
  }
});

const Sidebar = () => {
  const classes = styles();
  const appContext = useContext(AppContext);
  const { subCategoryData, isDisplaySubCategory, closeSubSidebar } = appContext;

  return (
    <Drawer
      style={{ zIndex: '20000' }}
      variant='temporary'
      anchor={'left'}
      open={isDisplaySubCategory}
      onClose={() => console.log('click')}
      ModalProps={{
        keepMounted: true
      }}
    >
      <div className={classes.drawer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIosIcon
            onClick={() => closeSubSidebar()}
            style={{ marginRight: '10px' }}
          />
          <Typography
            className={classes.headerText}
            variant='h5'
            component='h2'
          >
            <div className={classes.appLogo}>
              <img src={logo} alt='app logo' />
            </div>
            <span> PMT Store</span>
          </Typography>
        </div>
        {subCategoryData && (
          <SubCategoryLink subCategoryData={subCategoryData} />
        )}
      </div>
    </Drawer>
  );
};

export default Sidebar;
