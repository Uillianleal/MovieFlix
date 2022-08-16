import { Route, Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import history from './util/history';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import MovieCatalog from './pages/Private/MovieCatalog';
import MovieDetails from './pages/Private/MovieDetails';

const Routes = () => (
  <Router history={history}>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <MovieCatalog />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
