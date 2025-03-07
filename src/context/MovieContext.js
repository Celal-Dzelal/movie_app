import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MovieContextArea = createContext();

const MovieContext = ({ children }) => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  const getMovies = async (API) => {
    const res = await axios.get(API);
    setMovies(res.data.results);
  };

  useEffect(() => {
    getMovies(BASE_URL);
  }, []);

  return (
    <MovieContextArea.Provider value={{ movies, getMovies }}>
      {children}
    </MovieContextArea.Provider>
  );
};

export default MovieContext;
