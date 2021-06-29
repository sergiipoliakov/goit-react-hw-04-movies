import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
// import Container from './components/Container/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
// const HomePageGrid = lazy(() =>
//   import(
//     './views/HomePage/HomePageGrid.js' /* webpackChunkName: "home-page" */
//   ),
// );
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movie-detail-page" */
  ),
);

const App = () => (
  <>
    <CssBaseline />
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />

          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.MovieDetails} component={MovieDetailsPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  </>
);

export default App;
