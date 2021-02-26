import React from 'react';
import { NavLink } from 'react-router-dom';

// Logo
import monitor from '../../assets/img/sidebar/monitor.svg';
import phone from '../../assets/img/sidebar/iphone.svg';
import automobile from '../../assets/img/sidebar/automobile.svg';
import electronics from '../../assets/img/sidebar/electronics.svg';
import baby from '../../assets/img/sidebar/baby.png';
import clothes from '../../assets/img/sidebar/clothes.svg';
import beauty from '../../assets/img/sidebar/make-up.png';
import diningTable from '../../assets/img/sidebar/dining-table.png';

// Material-UI/Core
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles, Typography } from '@material-ui/core';

import { primaryColor } from '../../assets/js/styleCss';

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
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.textHeader} variant='body2' paragraph>
        our categories
      </Typography>
      <List style={{ padding: '5px 0' }} className={classes.listWrapper}>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img className={classes.icon} src={beauty} alt='Health & beauty' />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'Health & beauty'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img
              className={classes.icon}
              src={diningTable}
              alt='home & fashion'
            />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'home & office'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img className={classes.icon} src={phone} alt='phone' />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'phone & tablet'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img className={classes.icon} src={monitor} alt='computing' />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'computing'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img className={classes.icon} src={electronics} alt='electronics' />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'electronics'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img className={classes.icon} src={clothes} alt='fashion' />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'fashion'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img className={classes.icon} src={baby} alt='baby product' />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'baby products'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <img className={classes.icon} src={monitor} alt='gaming' />
          <NavLink className={classes.link} to={'/'}>
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'gaming'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink className={classes.link} to={'/'}>
            <img className={classes.icon} src={automobile} alt='fashion' />
            <ListItemText
              style={{ textTransform: 'capitalize' }}
              primary={'automobile'}
              disableTypography={true}
            />
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
};

export default SidebarLink;
