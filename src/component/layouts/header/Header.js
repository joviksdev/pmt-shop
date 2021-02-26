import React, { useState, useContext } from 'react';
import AppContext from '../../../context/app/appContext';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import CategoryWrapper from '../category/CategoryWrapper';
import logo from '../../assets/img/logo.png';
import Search from '../parser/Search';

// @material-ul/core

import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';

//Material-Ui/Icon
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

import styles from '../../assets/js/styleCss/headerStyle';
const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();

  const appContext = useContext(AppContext);
  const { toggleSideBar } = appContext;

  const [isDisplay, setIsDisplay] = useState(false);
  const [open, setOpen] = useState(null);
  const toggleMenu = e => {
    setIsDisplay(!isDisplay);
    setOpen(open === null ? e.currentTarget : null);
  };

  const rotateSvg = cx({ [classes.rotateSvg]: isDisplay });

  return (
    <div style={{ position: 'relative' }} className={classes.headerMainWrapper}>
      <div className={classes.horizontalLine}>
        <div className={classes.container}>
          <div className={classes.headerContent}>
            <div style={{ marginRight: '10px' }}>
              <Hidden implementation='css' mdUp>
                <MenuIcon
                  onClick={() => toggleSideBar()}
                  style={{ verticalAlign: 'middle' }}
                />
              </Hidden>
            </div>
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
            <div className={classes.headerSearchWrapper}>
              <Hidden mdDown implementation='css'>
                <Search />
              </Hidden>
            </div>
            <div>
              <MenuList className={classes.menuList}>
                <MenuItem className={classes.menuLinkColumn}>
                  <Link style={{ position: 'relative' }} to='/'>
                    <span className={classes.cartNumber}>2</span>
                    <ShoppingCartOutlinedIcon />
                    <span>
                      <Hidden implementation='css' smDown>
                        Cart
                      </Hidden>
                    </span>
                  </Link>
                </MenuItem>
                <Hidden implementation='css' smDown>
                  <MenuItem className={classes.menuLinkColumn}>
                    <Link to='/'>
                      <AssignmentOutlinedIcon />

                      <span>Whitelist</span>
                    </Link>
                  </MenuItem>
                </Hidden>
                <Hidden implementation='css' smDown>
                  <MenuItem className={classes.menuLinkColumn}>
                    <Link to='/'>
                      <HelpOutlineOutlinedIcon />
                      <span>Help</span>
                    </Link>
                  </MenuItem>
                </Hidden>
                <MenuItem className={classes.menuLink} onClick={toggleMenu}>
                  <PersonIcon />
                  <Hidden smDown implementation='css'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      Login{' '}
                      <ArrowDropDownIcon
                        className={`${classes.iconSvg} ${rotateSvg}`}
                        style={{ marginLeft: '5px' }}
                      />
                    </div>
                  </Hidden>
                </MenuItem>
                <Popper
                  style={{ zIndex: '10000' }}
                  open={Boolean(isDisplay)}
                  anchorEl={open}
                  transition
                  disablePortal
                  placement='bottom'
                >
                  {({ TransitionProps }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: '0 0 0' }}
                    >
                      <Paper
                        style={{
                          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)'
                        }}
                        className={classes.dropdown}
                      >
                        <MenuList role='menu' className={classes.dropdownMenu}>
                          <MenuItem
                            style={{ textAlign: 'center' }}
                            onClick={toggleMenu}
                            className={classes.dropdownItem}
                          >
                            <Link to='/auth/login'>login</Link>
                          </MenuItem>
                          <span className={classes.option}>or</span>
                          <MenuItem
                            onClick={toggleMenu}
                            className={classes.dropdownItem}
                          >
                            <Link to='/auth/register'>create an account</Link>
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </MenuList>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Hidden lgUp implementation='css'>
          <div className={classes.container}>
            <div className={classes.searchForm}>
              <Search />
            </div>
          </div>
        </Hidden>
        <div className={classes.container}>
          <Hidden mdDown implementation='css'>
            <CategoryWrapper />
          </Hidden>
        </div>
      </div>
    </div>
  );
};

export default Header;
