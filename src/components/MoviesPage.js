import React from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "./Movies";
import MovieInfo from "./MovieInfo";

function MoviesPage({ movies, match }) {
  return (
    <div>
      <h1>Movies Page</h1>
      <Movies movies={movies} />
      <Switch>
        <Route
          path={`${match.url}/:movieId`}
          render={(props) => <MovieInfo {...props} movies={movies} />}
        />
      </Switch>
    </div>
  );
}

export default MoviesPage;
