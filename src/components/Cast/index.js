import { Component } from 'react';

import { getMovieCast } from '../../services/movies-Api';

export default class Cast extends Component {
  static defaultProps = {
    image:
      'https://lh3.googleusercontent.com/proxy/gCazWuMuIGY_An8jiafKtH1X23xeiRrTrVlJsWoUuKOxuFNkWsgeAI1KuAQSrTGE67pbvmL87lvEFM8ZOQQa_o9TmMl34Nm_VY_mCfi9Y9RDZfsnKY0PEeM',
  };
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
    const { image } = this.props;
    return (
      <>
        {cast.length > 0 ? (
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <h2>{actor.name}</h2>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w92${actor.profile_path}`
                      : image
                  }
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
