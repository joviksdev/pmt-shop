import React, { useReducer } from 'react';
import appReducer from './appReducer';
import AppContext from './appContext';
import axios from 'axios';

import {
	TOGGLE_SIDEBAR,
	DISPLAY_SUB_SIDEBAR,
	CLOSE_SUB_SIDEBAR,
	GET_CART,
	ADD_CART,
	DISPLAY_ALERT,
	HIDE_ALERT,
	REMOVE_CART,
	INCREMENT_CART,
	DECREMENT_CART,
} from '../types';

const api = process.env.REACT_APP_LOCAL_API;

const AppState = (props) => {
	const initialState = {
		isDisplaySidebar: false,
		isDisplaySubCategory: false,
		subCategoryData: null,
		carts: null,
		alertMsg: null,
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	// Toggle side bar
	const toggleSideBar = () => {
		dispatch({
			type: TOGGLE_SIDEBAR,
		});
	};

	const displaySubSidebar = (payload) => {
		dispatch({
			type: DISPLAY_SUB_SIDEBAR,
			payload,
		});
	};

	const closeSubSidebar = () => {
		dispatch({
			type: CLOSE_SUB_SIDEBAR,
		});
	};

	const retrieveProducts = async () => {
		try {
			const res = await axios.get(`${api}/products`);
			const products = res.data.payload;
			console.log(products);
		} catch (error) {}
	};

	// Add To Cart
	const addToCart = (item, props) => {
		// Add quantity
		item.quantity = 1;
		const cartInLocalStorage = localStorage.getItem('pmt-cart');

		if (state.carts) {
			const isfind = state.carts.find((cart) => cart.id === item.id);
			if (isfind) {
				setAlert('Item already in cart');
				console.log('click');
			} else {
				dispatch({
					type: ADD_CART,
					payload: [item, ...state.carts],
				});

				// Store To LocalStorage
				if (cartInLocalStorage) {
					localStorage.setItem(
						'pmt-cart',
						JSON.stringify([item, ...JSON.parse(cartInLocalStorage)])
					);
				} else {
					localStorage.setItem('pmt-cart', JSON.stringify([item]));
				}

				// Redirect to Cart Page
				props.history.push('/cart');
			}
		} else {
			dispatch({
				type: ADD_CART,
				payload: [item],
			});

			// Store to Cart
			localStorage.setItem('pmt-cart', JSON.stringify([item]));

			// Redirect to Cart Page
			props.history.push('/cart');
		}
	};

	// Load Cart
	const getCart = () => {
		const cartInLocalStorage = localStorage.getItem('pmt-cart');

		if (cartInLocalStorage) {
			dispatch({
				type: GET_CART,
				payload: JSON.parse(cartInLocalStorage),
			});
		}
	};

	// Remove Cart
	const removeCart = (id) => {
		dispatch({
			type: REMOVE_CART,
			payload: id,
		});

		// Cart in localStorage
		const cartInLocalStorage = localStorage.getItem('pmt-cart');
		if (cartInLocalStorage) {
			const carts = JSON.parse(cartInLocalStorage).filter(
				(cart) => cart.id !== id
			);
			localStorage.setItem('pmt-cart', JSON.stringify(carts));
		}
	};

	// Update Cart
	// Imcrement Cart
	const incrementCart = (cart) => {
		// Get Item From LocalStorage
		const itemFromStore = JSON.parse(localStorage.getItem('pmt-cart'));

		// Find item by ID and Increment Quantity and SubTotal
		const carts = itemFromStore.map((item) =>
			item.id === cart.id
				? {
						...item,
						quantity: cart.quantity + 1,
						subTotal: parseInt(cart.subTotal) + parseInt(cart.price),
				  }
				: item
		);

		localStorage.setItem('pmt-cart', JSON.stringify(carts));

		dispatch({
			type: INCREMENT_CART,
			payload: cart,
		});
	};

	// Decrement Cart
	const decrementCart = (cart) => {
		// Get Item From LocalStorage
		const itemFromStore = JSON.parse(localStorage.getItem('pmt-cart'));

		// Find item by ID and Increment Quantity and SubTotal
		const carts = itemFromStore.map((item) =>
			item.id === cart.id
				? {
						...item,
						quantity: cart.quantity - 1,
						subTotal: parseInt(cart.subTotal) - parseInt(cart.price),
				  }
				: item
		);

		localStorage.setItem('pmt-cart', JSON.stringify(carts));
		dispatch({
			type: DECREMENT_CART,
			payload: cart,
		});
	};

	// Set Alert
	const setAlert = (msg) => {
		dispatch({
			type: DISPLAY_ALERT,
			payload: msg,
		});

		setTimeout(() => {
			dispatch({
				type: HIDE_ALERT,
			});
		}, 2000);
	};

	return (
		<AppContext.Provider
			value={{
				isDisplaySidebar: state.isDisplaySidebar,
				isDisplaySubCategory: state.isDisplaySubCategory,
				subCategoryData: state.subCategoryData,
				carts: state.carts,
				alertMsg: state.alertMsg,
				retrieveProducts,
				toggleSideBar,
				displaySubSidebar,
				closeSubSidebar,
				addToCart,
				getCart,
				removeCart,
				incrementCart,
				decrementCart,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
