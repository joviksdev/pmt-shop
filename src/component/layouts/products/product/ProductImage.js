import React from 'react';

// MAterial-Ui/Core
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-width: 768px)': {
      width: '260px !important',
      height: '260px !important'
    }
  },
  img: {
    display: 'block',
    margin: 'auto',
    width: '100%'
  }
});

const ProductImage = props => {
  const { img, alt } = props;
  const classes = styles();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={img} alt={alt} />
    </div>
  );
};

export default ProductImage;
