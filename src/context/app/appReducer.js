import {
  TOGGLE_SIDEBAR,
  DISPLAY_SUB_SIDEBAR,
  CLOSE_SUB_SIDEBAR
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

    default:
      return state;
  }
};

export default appReducer;
