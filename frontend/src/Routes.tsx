import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MovieCatalog from './pages/Private/MovieCatalog';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies">
        <MovieCatalog/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
