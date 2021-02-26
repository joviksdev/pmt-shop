import React from 'react';
import { whiteColor } from '../../assets/js/styleCss';

// Material-UI/Core
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  sidebar: {
    width: '100%',
    backgroundColor: whiteColor,
    padding: '10px',
    borderRadius: '5px',
    '& ul': {
      padding: '0px'
    },
    '& li': {
      fontSize: '14px'
    }
  }
});

const CategorySidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <MenuList>
        <MenuItem>health & beauty</MenuItem>
        <MenuItem>home & office</MenuItem>
        <MenuItem>phone & tablets</MenuItem>
        <MenuItem>computing</MenuItem>
        <MenuItem>electronics</MenuItem>
        <MenuItem>fashion</MenuItem>
        <MenuItem>baby products</MenuItem>
        <MenuItem>sporting goods</MenuItem>
        <MenuItem>automobile</MenuItem>
      </MenuList>
    </div>
  );
};

export default CategorySidebar;
