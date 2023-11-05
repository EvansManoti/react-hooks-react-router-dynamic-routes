import React from "react";

function MovieInfo({ movies, match }) {
  const movieId = match.params.movieId;

  const movie = movies[movieId];

  return (
    <div>
      <h2>Movie Info</h2>
      {movie ? (
        <div>
          <h3>Title: {movie.title}</h3>
          <p>Movie ID: {movie.id}</p>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default MovieInfo;