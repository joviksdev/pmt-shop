import React from 'react';

// MAterial-UI/Core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Material-UI/icon
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { grayColor, container } from '../../assets/js/styleCss';

const styles = makeStyles({
  item: {
    container: {
      ...container
    },
    margin: 'auto',
    textAlign: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: '80px',
      display: 'block',
      margin: 'auto',
      color: grayColor[6]
    }
  }
});

const EmptyCart = () => {
  const classes = styles();
  return (
    <Grid container>
      <Grid className={classes.item} item xs={10}>
        <ShoppingCartOutlinedIcon />
        <Typography
          style={{ margin: '10px 0 0' }}
          variant='body2'
          paragraph
          color='textSecondary'
        >
          Your cart is empty
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EmptyCart;
