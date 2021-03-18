import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles';

// Material-UI/Core
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles, Typography } from '@material-ui/core';

// Material-UI/Icon

const useStyles = makeStyles(styles);

const SubCategoryLink = props => {
  const { subCategoryData } = props;
  const classes = useStyles();

  return (
    <div style={{ marginLeft: '20px' }}>
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
