import React from 'react';

const MovieDetail = props => {
  let movie = props.movie;
  let url = 'http://www.imdb.com/title/' + movie.imdbID;
  let homepage = 'https://jaygala24.github.io/movieapp/';
  return (
    <div className="container text-white text-center">
      <h2>{movie.Title}</h2>
      <div className="row">
        <div className="col-12 col-lg-4 mt-2">
          <img src={movie.Poster} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-12 col-lg-8 mt-2">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Genre:</strong> {movie.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {movie.Released}
            </li>
            <li className="list-group-item">
              <strong>Language:</strong> {movie.Language}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {movie.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {movie.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors:</strong> {movie.Actors}
            </li>
            <li className="list-group-item">
              <strong>Plot:</strong> {movie.Plot}
            </li>
          </ul>
        </div>
      </div>
      <div className="row m-3">
        <div className="col-12">
          <a href={url} className="btn btn-primary mr-3">
            View IMDB
          </a>
          <a href={homepage} className="btn btn-primary">
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
