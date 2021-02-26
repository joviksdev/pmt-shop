import React, { useState } from 'react';
import cx from 'classnames';

// Material-UI Core Components
import { makeStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

// Material-UI Core Component Icon
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import styles from '../../assets/js/styleCss/categoryStyle';

const useStyles = makeStyles(styles);

const CategoryWrapper = () => {
  const classes = useStyles();

  const [isHover, setIsHover] = useState(false);

  // Category toggler
  const handleClick = () => {
    setIsHover(!isHover);
  };

  const rotate = cx({ [classes.rotateSvg]: isHover });

  return (
    <div className={classes.categoryWrapper}>
      <MenuList className={classes.menuList}>
        <MenuItem
          className={`${classes.categoryBtn} ${classes.categoryMenuList}`}
          onClick={() => handleClick()}
        >
          <FormatListBulletedIcon style={{ marginRight: '5px' }} />
          Categories
          <ArrowDropDownIcon className={rotate} />
        </MenuItem>
        <MenuItem className={classes.categoryMenuList}>New Arrivals</MenuItem>
        <MenuItem className={classes.categoryMenuList}>
          Recommended for you
        </MenuItem>
        <MenuItem className={classes.categoryMenuList}>
          Official Stores
        </MenuItem>
        <MenuItem className={classes.categoryMenuList}>Trending Now</MenuItem>
      </MenuList>
    </div>
  );
};

export default CategoryWrapper;
