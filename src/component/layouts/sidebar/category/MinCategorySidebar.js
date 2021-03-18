import React, { useContext } from 'react';
import AppContext from '../../../../context/app/appContext';
import logo from '../../../assets/img/logo.png';
import SidebarLink from './CategoryLink';
import SocialLink from '../../parser/SocialMediaLink';
import styles from './styles';

// Material-UI/Core
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Material-UI/Icon
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(styles);

const Sidebar = () => {
  const classes = useStyles();
  const appContext = useContext(AppContext);
  const { isDisplaySidebar, toggleSideBar, displaySubSidebar } = appContext;

  return (
    <Drawer
      style={{ zIndex: '20000' }}
      variant='temporary'
      anchor={'left'}
      open={isDisplaySidebar}
      onClose={() => toggleSideBar()}
      ModalProps={{
        keepMounted: true
      }}
    >
      <div className={classes.drawer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CloseIcon
            onClick={() => toggleSideBar()}
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
        <div style={{ marginLeft: '20px' }}>
          <SidebarLink
            displaySubSidebar={displaySubSidebar}
            toggleSideBar={toggleSideBar}
          />
        </div>
        <SocialLink />
      </div>
    </Drawer>
  );
};

export default Sidebar;
