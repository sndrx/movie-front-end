import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../state/ducks/movies';

export default configureStore({
  reducer: {
    movies: moviesReducer,
  }
});
