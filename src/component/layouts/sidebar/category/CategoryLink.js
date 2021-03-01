import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from '../../../data/categories';

// Material-UI/Core
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles, Typography } from '@material-ui/core';

import { primaryColor } from '../../../assets/js/styleCss';

// Material-UI/Icon

const useStyles = makeStyles({
  textHeader: {
    color: primaryColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '15px 0px 0px'
  },
  item: {
    padding: '6px 0px !important'
  },
  link: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    width: '18px',
    marginRight: '10px',
    fill: primaryColor,
    display: 'inline-block'
  }
});

const SidebarLink = props => {
  const { displaySubSidebar } = props;
  const classes = useStyles();

  const displaySubCategory = subCategories => {
    displaySubSidebar(subCategories);
  };

  return (
    <div>
      <Typography className={classes.textHeader} variant='body2' paragraph>
        our categories
      </Typography>
      <List style={{ padding: '5px 0' }} className={classes.listWrapper}>
        {categories.map((category, key) => (
          <ListItem
            onClick={() =>
              displaySubCategory({
                ref: category.name,
                subCategories: category.subCategories
              })
            }
            key={key}
            className={classes.item}
          >
            <NavLink className={classes.link} to={category.link}>
              <img
                className={classes.icon}
                src={category.icon}
                alt={category.name}
              />
              <ListItemText
                style={{ textTransform: 'capitalize' }}
                primary={category.name}
                disableTypography={true}
              />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarLink;
