import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-4">
      <h1 className="text-2xl py-2">{title}</h1>
      <div className="flex overflow-x-auto">
        {movies && movies.map((movie) => (
          <MovieCard movie={movie} key={movie.key} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
