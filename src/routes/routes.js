import Index from '../component/views/pages/index';
import Login from '../component/views/pages/auth/Login';
import Register from '../component/views/pages/auth/Register';
import Product from '../component/views/pages/Product';

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
    path: '/:name',
    name: 'Product',
    component: Product
  }
];

export default appRoute;
