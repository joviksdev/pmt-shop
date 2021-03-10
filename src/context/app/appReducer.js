import {
  TOGGLE_SIDEBAR,
  DISPLAY_SUB_SIDEBAR,
  CLOSE_SUB_SIDEBAR,
  GET_CART,
  ADD_CART,
  REMOVE_CART,
  DISPLAY_ALERT,
  HIDE_ALERT,
  INCREMENT_CART,
  DECREMENT_CART
} from '../types';

const appReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isDisplaySidebar: !state.isDisplaySidebar
      };

    case DISPLAY_SUB_SIDEBAR:
      return {
        ...state,
        subCategoryData: action.payload,
        isDisplaySubCategory: true
      };

    case CLOSE_SUB_SIDEBAR:
      return {
        ...state,
        subCategoryData: null,
        isDisplaySubCategory: false
      };

    case GET_CART:
      return {
        ...state,
        carts: action.payload
      };

    case ADD_CART:
      return {
        ...state,
        carts: action.payload
      };

    case REMOVE_CART:
      return {
        ...state,
        carts: state.carts.filter(cart => cart.id !== action.payload)
      };

    case INCREMENT_CART:
      return {
        ...state,
        carts: state.carts.map(cart =>
          cart.id === action.payload.id
            ? {
                ...cart,
                quantity: cart.quantity + 1,
                subTotal:
                  parseInt(cart.subTotal) + parseInt(action.payload.price)
              }
            : cart
        )
      };

    case DECREMENT_CART:
      return {
        ...state,
        carts: state.carts.map(cart =>
          cart.id === action.payload.id
            ? {
                ...cart,
                quantity: cart.quantity - 1,
                subTotal:
                  parseInt(cart.subTotal) - parseInt(action.payload.price)
              }
            : cart
        )
      };

    case DISPLAY_ALERT:
      return {
        ...state,
        alertMsg: action.payload
      };

    case HIDE_ALERT:
      return {
        ...state,
        alertMsg: null
      };

    default:
      return state;
  }
};

export default appReducer;
