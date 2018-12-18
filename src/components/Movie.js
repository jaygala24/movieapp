import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

class Movie extends Component {
  getMovieID = e => {
    this.props.getMovie(e);
  };

  render() {
    let movies = this.props.movies;
    let movieList = movies.map(movie => (
      <MovieItem
        key={movie.imdbID}
        movie={movie}
        getMovie={this.getMovieID.bind(this)}
      />
    ));

    return (
      <div className="container">
        <div className="row">{movieList}</div>
      </div>
    );
  }
}

Movie.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movie;
