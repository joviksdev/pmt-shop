import Index from '../component/views/index';
import Login from '../component/views/auth/Login';
import Register from '../component/views/auth/Register';
import Profile from '../component/views/Profile';
import Product from '../component/views/Product';
import Cart from '../component/views/Cart';
import RateReview from '../component/views/RateReview';
import Checkout from '../component/views/Checkout';

// Categories
import AndroidPhone from '../component/views/categoryList/adroidPhone';
import Laptops from '../component/views/categoryList/laptops';

const appRoute = [
	{
		path: '/',
		name: 'Home',
		component: Index,
	},
	{
		path: '/auth/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/auth/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/item/:name/:id',
		name: 'Product',
		component: Product,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
	},
	{
		path: '/user',
		name: 'Profile',
		component: Profile,
	},
	{
		path: '/rate-review',
		name: 'Rate and Review',
		component: RateReview,
	},
	{
		path: '/checkout/:item',
		name: 'Checkout',
		component: Checkout,
	},
	{
		path: '/android-phones',
		name: 'Android Phones',
		component: AndroidPhone,
	},
	{
		path: '/laptops',
		name: 'Laptops',
		component: Laptops,
	},
];

export default appRoute;
