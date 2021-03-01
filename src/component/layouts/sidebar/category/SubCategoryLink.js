import React from 'react';
import { NavLink } from 'react-router-dom';

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

const SubCategoryLink = props => {
  const { subCategoryData } = props;
  const classes = useStyles();

  return (
    <div>
      {subCategoryData && (
        <>
          {' '}
          <Typography className={classes.textHeader} variant='body2' paragraph>
            {subCategoryData.ref}
          </Typography>
          <List style={{ padding: '5px 0' }} className={classes.listWrapper}>
            {subCategoryData.subCategories.map((category, key) => (
              <ListItem key={key} className={classes.item}>
                <NavLink className={classes.link} to={'/'}>
                  {category.icon && (
                    <img
                      className={classes.icon}
                      src={category.icon}
                      alt={category.name}
                    />
                  )}
                  <ListItemText
                    style={{ textTransform: 'capitalize' }}
                    primary={category.name}
                    disableTypography={true}
                  />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default SubCategoryLink;
