import React from "react";
import { Link } from "react-router-dom";

function Movies({ movies }) {
  const renderMovies = Object.values(movies).map((movie) => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Movies</h2>
      <ul>{renderMovies}</ul>
    </div>
  );
}

export default Movies;