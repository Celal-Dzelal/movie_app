import React, { useContext } from "react";
import { AuthContextArea } from "../context/AuthContext";

const MovieCard = ({ id, title, overview, poster_path, vote_average }) => {
  const { currentUser } = useContext(AuthContextArea);
  return (
    <div className="movie" id="container">
      <img
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt="movie-card"
        loading="lazy"
      />
      <div className="flex align-baseline justify-between p-1 text-white ">
        <h5 className="truncate w-64">{title}</h5>
        {currentUser && (
          <span className={`tag ${vote_average > 7 ? "green" : "red"}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      {currentUser && (
        <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
