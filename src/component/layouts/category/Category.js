import React, { useState } from 'react';

// Material-UI Icon/core
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../../assets/js/styleCss/categoryStyle';
const useStyles = makeStyles(styles);

const Category = ({ category, dropdownWidth }) => {
  const classes = useStyles();
  const { name, subCategories } = category;

  const [isDisplay, setIsDisplay] = useState(false);
  const [isSubCategoryDisplay, setIsSubCategoryDisplay] = useState(false);

  const displaySubCategory = e => {
    setIsDisplay(true);
    setIsSubCategoryDisplay(true);
  };

  const hideSubCategory = e => {
    if (isSubCategoryDisplay) {
      setIsDisplay(true);
    } else {
      setIsSubCategoryDisplay(false);
      isDisplay(false);
    }
  };

  return (
    <div>
      <MenuItem
        onMouseEnter={displaySubCategory}
        onMouseLeave={hideSubCategory}
        style={{ textAlign: 'center' }}
        className={classes.dropdownItem}
      >
        <span>{name}</span>
      </MenuItem>
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: `${dropdownWidth + 10}px `,
          width: '100%'
        }}
      >
        <Collapse in={isDisplay} style={{ transformOrigin: '0 0 0' }}>
          <Paper className={classes.paper}>
            <div
              className={classes.gridSubcategory}
            >
              {subCategories.map((category, i) => (
                <p key={i}>{category.name}</p>
              ))}
            </div>
          </Paper>
        </Collapse>
      </div>
    </div>
  );
};

export default Category;
