import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    searchMovie: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.getMovies(e);
    this.setState({ searchMovie: e.target.elements.movie.value });
  };

  onChange = e => {
    this.setState({ searchMovie: e.target.value });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="jumbotron text-center">
          <h3 className="mb-4">Search For Any Movie</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              className="form-control"
              name="movie"
              placeholder="Search any movie"
              value={this.state.searchMovie}
              onChange={this.onChange}
            />
          </form>
          {this.props.errors ? (
            <p className="lead text-danger">Please enter valid movie name</p>
          ) : null}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  getMovies: PropTypes.func.isRequired,
  errors: PropTypes.bool.isRequired
};

export default Search;
