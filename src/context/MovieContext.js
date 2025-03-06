import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MovieContextArea = createContext();

const MovieContext = ({ children }) => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await axios.get(BASE_URL);
    setMovies(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContextArea.Provider value={{ movies }}>
      {children}
    </MovieContextArea.Provider>
  );
};

export default MovieContext;
