import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIs } from "../APIDecider";
const fetch = require('node-fetch');


export const fetchFiftyMovies = createAsyncThunk(
  'movies/fetchFiftyMovies',
  () => {
    return fetch(`${APIs.movieAPI}/api/movies`)
      .then(response => response.json())
      .then(json => {
        return json;
      });
  }
);

export const fetchMoviesByGenre = createAsyncThunk(
  'movies/fetchMoviesByGenre',
  (payload) => {
    return fetch(`${APIs.movieAPI}/api/movies/${payload.genre}`)
      .then(response => response.json())
      .then(json => {
        return json;
      });
  }
);