import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import { getMovieDetalsById } from '../services/movies-Api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';

export default class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    genres: [],
    id: null,
    original_title: null,
    overview: null,
    poster_path: null,
    release_date: null,
    revenue: null,
    title: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const { data } = await getMovieDetalsById(movieId);

    this.setState({
      ...data,
    });
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.movies);
  };

  render() {
    const { match } = this.props;
    const {
      original_title,
      release_date,
      poster_path,
      name,
      overview,
      genres,
    } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Назад к списку
        </button>
        <h1>
          {original_title} {release_date}
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
          {genres.map(gener => (
            <li key={gener.id}>{gener.name}</li>
          ))}
        </ul>

        <h2>overview</h2>

        <p>{overview}</p>

        <NavLink to={`${match.url}/cast`}>Cast</NavLink>
        <br />
        <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </div>
    );
  }
}
