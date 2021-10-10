import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

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
    './views/MovieDetailsPage' /* webpackChunkName: "movie-detail-page" */
  ),
);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <AppBar />
        {/* <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography varian="h1" className={classes.title}>
            Kino Boom
          </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            Sing Up
          </Button>
        </Toolbar> */}

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
}

export default App;
