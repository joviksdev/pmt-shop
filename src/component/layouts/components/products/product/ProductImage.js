import React from 'react';
import img from '../../../../assets/img/products/nike.png';

// MAterial-Ui/Core
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    width: '200px',
    height: '200px',
    '@media (min-width: 768px)': {
      width: '260px !important',
      height: '260px !important'
    },
    '@media (min-width: 992px)': {
      width: '320px  !important',
      height: '320px  !important'
    },
    '@media (min-width: 1200px)': {
      width: '380px  !important',
      height: '380px  !important'
    }
  },
  img: {
    display: 'block',
    margin: 'auto',
    width: '100%'
  }
});

const ProductImage = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <img className={classes.img} src={img} alt='name' />
    </div>
  );
};

export default ProductImage;
