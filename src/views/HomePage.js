import { Component } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from '../services/movies-Api';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { data } = await getTrendingMovies();
    console.log(data.results);
    this.setState(prevState => ({
      movies: data.results,
    }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    console.log(match.url);
    return (
      <>
        <h1>Trending today</h1>

        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
