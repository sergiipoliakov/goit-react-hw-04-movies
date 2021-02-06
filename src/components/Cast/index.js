import React, { Component } from 'react';
import { getMovieCast } from '../../services/movies-Api';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const { data } = await getMovieCast(movieId);

    this.setState(prevState => ({
      cast: data.cast,
    }));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast.length > 0 ? (
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <h2>{actor.name}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                  alt={actor.name}
                />
              </li>
            ))}
          </ul>
        ) : (
          'We dont have any reviews abou this movie'
        )}
      </>
    );
  }
}
