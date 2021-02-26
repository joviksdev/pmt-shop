import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AppState from './context/app/AppState';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);

reportWebVitals();
