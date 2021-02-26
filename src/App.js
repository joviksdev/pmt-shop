import './component/assets/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';
import Sidebar from './component/layouts/sidebar/Sidebar';

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

function App() {
  const classes = styles();

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
        <Sidebar />
        <div className={classes.container}>
          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
