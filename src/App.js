import './component/assets/css/App.css';
import React, { useEffect, useContext } from 'react';
import AppContext from './context/app/appContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';
import MinSidebar from './component/layouts/sidebar/category/MinCategoryWrapper';
import ToastAlert, {
  setToastAlert
} from './component/layouts/alert/ToastAlert';
import NotFound from './component/views/NotFound/index.js';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    flex: '1'
  }
});

function App(props) {
  const classes = styles();
  const appContext = useContext(AppContext);
  const { getCart, alertMsg } = appContext;

  // Load Cart
  useEffect(
    () => {
      getCart();
    },
    // eslint-disable-next-line
    []
  );

  // Check fro alert and Display
  useEffect(() => {
    if (alertMsg) {
      setToastAlert({ msg: alertMsg, type: 'error' });
    }
  });

  // Get Route
  const getRoutes = routes => {
    return routes.map((route, key) => (
      <Route
        exact
        path={`${route.path}`}
        component={route.component}
        key={key}
      />
    ));
  };

  return (
    <div>
      <Router>
        <MinSidebar />
        <ToastAlert />
        <div className={classes.container}>
          <Switch>
            {getRoutes(routes)}
            <NotFound />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
