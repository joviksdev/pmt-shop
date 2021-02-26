import React, { useReducer } from 'react';
import appReducer from './appReducer';
import AppContext from './appContext';

import { TOGGLE_SIDEBAR } from '../types';

const AppState = props => {
  const initialState = {
    isToggleSideBar: false,
    isDisplaySidebar: false
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleSideBar = () => {
    dispatch({
      type: TOGGLE_SIDEBAR
    });
  };

  return (
    <AppContext.Provider
      value={{
        isDisplaySidebar: state.isDisplaySidebar,
        toggleSideBar
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
