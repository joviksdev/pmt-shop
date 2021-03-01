import React, { useReducer } from 'react';
import appReducer from './appReducer';
import AppContext from './appContext';

import {
  TOGGLE_SIDEBAR,
  DISPLAY_SUB_SIDEBAR,
  CLOSE_SUB_SIDEBAR
} from '../types';

const AppState = props => {
  const initialState = {
    isDisplaySidebar: false,
    isDisplaySubCategory: false,
    subCategoryData: null
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleSideBar = () => {
    dispatch({
      type: TOGGLE_SIDEBAR
    });
  };

  const displaySubSidebar = payload => {
    dispatch({
      type: DISPLAY_SUB_SIDEBAR,
      payload
    });
  };

  const closeSubSidebar = () => {
    dispatch({
      type: CLOSE_SUB_SIDEBAR
    });
  };

  return (
    <AppContext.Provider
      value={{
        isDisplaySidebar: state.isDisplaySidebar,
        isDisplaySubCategory: state.isDisplaySubCategory,
        subCategoryData: state.subCategoryData,
        toggleSideBar,
        displaySubSidebar,
        closeSubSidebar
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
