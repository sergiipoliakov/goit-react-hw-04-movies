import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import getQueryParams from '../utils/getQueryParams';
import SearchBox from '../components/SearchBox';

import { getMoviesByQuery } from '../services/movies-Api';

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }
  fetchMovies = query => {
    getMoviesByQuery(query).then(respons => {
      this.setState({ movies: respons.data.results });
    });
  };

  handleChangeQuery = query => {
    this.props.history.push({
      //   pathname: this.props.location.pathname,
      ...this.props.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;

    const { match } = this.props;
    return (
      <>
        <SearchBox onSubmit={this.handleChangeQuery} />
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
