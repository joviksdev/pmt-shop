import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from '../../../data/categories';
import styles from './styles';

// Material-UI/Core
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles, Typography } from '@material-ui/core';

// Material-UI/Icon

const useStyles = makeStyles(styles);

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
