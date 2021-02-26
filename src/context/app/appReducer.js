import { TOGGLE_SIDEBAR } from '../types';

const appReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isDisplaySidebar: !state.isDisplaySidebar
      };

    default:
      return state;
  }
};

export default appReducer;
