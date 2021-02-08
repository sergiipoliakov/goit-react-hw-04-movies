import React, { Component } from 'react';
import { getMovieReview } from '../../services/movies-Api';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await getMovieReview(movieId);

    this.setState(prevState => ({
      reviews: data.results,
    }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>

              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <h2>Dont have any reviews about this movie!!</h2>
        )}
      </ul>
    );
  }
}
