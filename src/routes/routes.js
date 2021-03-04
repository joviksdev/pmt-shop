import Index from '../component/views/pages/index';
import Login from '../component/views/pages/auth/Login';
import Register from '../component/views/pages/auth/Register';
import Profile from '../component/views/pages/Profile';
import Product from '../component/views/pages/Product';
import Cart from '../component/views/pages/Cart';

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
    path: '/item/:name',
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
  }
];

export default appRoute;
