import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieDetail from './components/MovieDetail';

class App extends Component {
  state = {
    movies: [],
    movie: {},
    errors: false
  };

  async getMovies(e) {
    e.preventDefault();
    const movie = e.target.elements.movie.value;
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${movie}&apikey=3273255d`
    );
    if (res['data']['Response'] === 'True') {
      const movies = res['data']['Search'];
      this.setState({ movies: movies });
    } else {
      const { errors } = this.state;
      this.setState({ errors: !errors });
    }
  }

  async getMovie(e) {
    const movieID = localStorage.getItem('id');
    const res = await axios.get(
      `https://www.omdbapi.com/?i=${movieID}&apikey=3273255d`
    );
    const data = {
      data: res.data
    };
    this.setState({ movies: [], movie: data });
  }

  render() {
    return (
      <div className="App">
        <Header branding="Movie Mania" />
        {this.state.movie['data'] ? null : (
          <Search
            getMovies={this.getMovies.bind(this)}
            errors={this.state.errors}
          />
        )}
        {this.state.movies ? (
          <Movie
            movies={this.state.movies}
            getMovie={this.getMovie.bind(this)}
          />
        ) : null}
        {this.state.movie['data'] ? (
          <MovieDetail movie={this.state.movie['data']} />
        ) : null}
      </div>
    );
  }
}

export default App;
