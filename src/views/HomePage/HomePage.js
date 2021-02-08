import { Component } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from '../../services/movies-Api';

import styles from './HomePage.module.css';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { data } = await getTrendingMovies();

    this.setState(prevState => ({
      movies: data.results,
    }));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>

        {movies.length > 0 && (
          <ul className={styles.list}>
            {movies.map(movie => (
              <li className={styles.item} key={movie.id}>
                <Link
                  className={styles.link}
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: {
                      from: this.props.location,
                    },
                  }}

                  // {`movies/${movie.id}`}
                >
                  {movie.title ? movie.title : movie.name}
                  <img
                    className={styles.img}
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
