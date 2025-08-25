import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MovieContextArea = createContext();

const MovieContext = ({ children }) => {
  // Tüm Hook'ları önce tanımla
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

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
    if (API_KEY) {
      getMovies(BASE_URL);
    }
  }, [API_KEY, BASE_URL]);

  // API anahtarı kontrolü - tüm Hook'lardan sonra
  if (!API_KEY) {
    console.error("TMDB API key is missing!");
    return (
      <div>API key is missing. Please check your environment variables.</div>
    );
  }

  return (
    <MovieContextArea.Provider value={{ movies, getMovies, loading }}>
      {children}
    </MovieContextArea.Provider>
  );
};

export default MovieContext;
