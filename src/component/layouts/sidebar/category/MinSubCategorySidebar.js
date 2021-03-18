import React, { useContext } from 'react';
import AppContext from '../../../../context/app/appContext';
import logo from '../../../assets/img/logo.png';
import SubCategoryLink from './SubCategoryLink';
import styles from './styles';

// Material-UI/Core
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Material-UI/Icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(styles);

const Sidebar = () => {
  const classes = useStyles();
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
            style={{ marginRight: '10px', fontSize: '20px' }}
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
