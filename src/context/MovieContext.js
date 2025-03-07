import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MovieContextArea = createContext();

const MovieContext = ({ children }) => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async (API) => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(BASE_URL);
  }, [BASE_URL]);

  return (
    <MovieContextArea.Provider value={{ movies, getMovies, loading }}>
      {children}
    </MovieContextArea.Provider>
  );
};

export default MovieContext;
