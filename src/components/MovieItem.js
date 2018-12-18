import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieItem extends Component {
  getMovieID = e => {
    localStorage.setItem('id', this.props.movie.imdbID);
    this.props.getMovie(e);
    e.preventDefault();
  };

  render() {
    let movie = this.props.movie;

    return (
      <div className="col-12 col-sm-6 col-md-3">
        <div className="card text-center mb-2 mx-auto">
          <img className="card-img-top" src={movie.Poster} alt="Movie Poster" />
          <div className="card-footer">
            <h5 className="card-title">{movie.Title}</h5>
            <a
              href="/"
              onClick={this.getMovieID.bind(this)}
              className="btn btn-primary"
            >
              More info
            </a>
          </div>
        </div>
      </div>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;
