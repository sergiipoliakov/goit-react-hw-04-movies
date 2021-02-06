import React, { Component } from 'react';
import { getMovieReview } from '../../services/movies-Api';

export default class index extends Component {
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
        {reviews.map(review => (
          <li key={review.id}>
            <h2>{review.author}</h2>

            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
