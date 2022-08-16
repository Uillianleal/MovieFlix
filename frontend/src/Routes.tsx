import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MovieCatalog from './pages/Private/MovieCatalog';
import MovieDetails from './pages/Private/MovieDetails';


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
      <Route path="/details">
        <MovieDetails/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
