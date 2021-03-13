import Index from '../component/views/pages/index';
import Login from '../component/views/pages/auth/Login';
import Register from '../component/views/pages/auth/Register';
import Profile from '../component/views/pages/Profile';
import Product from '../component/views/pages/Product';
import Cart from '../component/views/pages/Cart';
import RateReview from '../component/views/pages/RateReview';
import Checkout from '../component/views/pages/Checkout';

// Categories
import PhoneTable from '../component/layouts/products/categories/phoneTablet';

const appRoute = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/item/:name/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/rate-review',
    name: 'Rate and Review',
    component: RateReview
  },
  {
    path: '/checkout/:item',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/phone-tablet',
    name: 'Phone and Tablet',
    component: PhoneTable
  }
];

export default appRoute;
