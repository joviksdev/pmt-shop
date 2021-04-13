import React, { useState } from 'react';
import cx from 'classnames';
import styles from '../styles';

// Material-UI/Core
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

// Material-UI/Icons
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(styles);

const CategoryBar = () => {
  const classes = useStyles();
  const path = window.location.pathname;
  const [isHover, setIsHover] = useState(false);
  // Category toggler
  const handleClick = () => {
    setIsHover(!isHover);
  };

  const rotate = cx({ [classes.rotateSvg]: isHover });
  return (
    <div className={classes.container}>
      <Hidden smDown implementation='css'>
        <div>
          <List className={classes.menuList} style={{ padding: '10px 0' }}>
            {path !== '/' && (
              <ListItem
                className={`${classes.categoryBtn} ${classes.categoryMenuList}`}
                onClick={() => handleClick()}
              >
                <FormatListBulletedIcon style={{ marginRight: '5px' }} />
                Categories
                <ArrowDropDownIcon className={rotate} />
              </ListItem>
            )}
            <ListItem button className={classes.categoryMenuList}>
              New Arrivals
            </ListItem>
            <ListItem button className={classes.categoryMenuList}>
              Recommended for you
            </ListItem>
            <ListItem button className={classes.categoryMenuList}>
              Official Stores
            </ListItem>
            <ListItem button className={classes.categoryMenuList}>
              Trending Now
            </ListItem>
          </List>
        </div>
      </Hidden>
    </div>
  );
};

export default CategoryBar;
