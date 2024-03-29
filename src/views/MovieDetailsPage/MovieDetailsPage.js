import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './MovieDatailsPage.css';

import { getMovieDetalsById } from '../../services/movies-Api';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';

export default class MovieDetailsPage extends Component {
  state = {
    title: null,
    release_date: null,
    poster_path: 'https://makitweb.com/demo/broken_image/images/noimage.png',
    name: null,
    overview: null,

    genres: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const { data } = await getMovieDetalsById(movieId);

    this.setState({
      ...data,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.replace(location?.state?.from || routes.movies);
  };

  render() {
    const { match, location } = this.props;

    const {
      title,
      release_date,
      poster_path,
      name,
      overview,

      genres,
    } = this.state;
    let releaseDate;

    if (release_date) {
      releaseDate = release_date.slice(0, 4);
    }
    let styles = {
      root: {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.state.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    };
    console.log(styles.root);

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Назад к списку
        </button>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${this.state.backdrop_path})`,
            backgroundSize: 'cover',

            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1>
            {title} ({releaseDate})
          </h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={name}
          />
          {/* <img
          src={`https://image.tmdb.org/t/p/w500/${this.state.backdrop_path}`}
          alt={this.state.mame}
        /> */}
          <ul>
            {genres &&
              genres.map(gener => <li key={gener.id}>{gener.name}</li>)}
          </ul>

          <h2>Описание</h2>

          <p className="overview">{overview}</p>
        </div>

        <NavLink
          to={{
            pathname: `${match.url}/cast`,
            state: {
              from: location,
            },
          }}
        >
          Актеры
        </NavLink>
        <br />
        <NavLink
          to={{
            pathname: `${match.url}/reviews`,
            state: {
              from: location,
            },
          }}
        >
          Ревю
        </NavLink>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </div>
    );
  }
}
