import React, { useContext } from "react";
import { MovieContextArea } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const { movies } = useContext(MovieContextArea);
  return (
    <div className="flex justify-center flex-wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Main;
