import React, { useContext } from 'react';
import AppContext from '../../../../../context/app/appContext';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import DeliveryDetails from './DeliveryDetails';
import Description from './Description';
import CustomerFeedback from './customerFeedback';
import shoe from '../../../../assets/img/products/nike.png';

// Material Ui/Core
import { makeStyles } from '@material-ui/core/styles';
import { container, whiteColor } from '../../../../assets/js/styleCss';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const styles = makeStyles({
  container: {
    ...container,
    marginTop: '10px',
    marginBottom: '10px',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgWhite: {
    backgroundColor: whiteColor
  }
});

const ProductView = props => {
  const classes = styles();
  const appContext = useContext(AppContext);
  const { addToCart } = appContext;
  // Product data
  const item = {
    id: 'pmt-123',
    name: 'Shoe',
    img: shoe,
    brand: 'Nike',
    price: '8000',
    subTotal: '8000',
    discount: '-10%',
    description:
      'Simple and Fashionable, Soft and Comfortable, Lightweight and wear-resistant. It is perfect for daily use. This classic monk single buckle shoes features Genuine Leather upper, slip on design for easy on/off wear, and monk shoes detailing on side for added style. Moreover, It is finished with smooth leather Lining, cushioned footbed for comfort, and non-skid outsole. This kind of shoes you wear, jeans or pants collocation, make you reflect the tough temperament.'
  };

  const saveToCart = () => {
    addToCart(item, props);
  };
  return (
    <div>
      <Grid className={`${classes.container} ${classes.bgWhite}`} container>
        <Grid item className={classes.center} xs={12} sm={5} md={4}>
          <ProductImage img={item.img} />
        </Grid>
        <Grid
          style={{ display: 'flex', alignItems: 'center', width: '100%' }}
          item
          xs={12}
          sm={7}
          md={8}
        >
          <ProductDetails
            addToCart={saveToCart}
            name={item.name}
            brand={item.brand}
            price={item.price}
          />
        </Grid>
      </Grid>
      <Hidden mdUp implementation='css'>
        <DeliveryDetails />
      </Hidden>
      <Description />
      <CustomerFeedback />
    </div>
  );
};

export default ProductView;
