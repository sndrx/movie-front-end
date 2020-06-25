import { createSlice } from '@reduxjs/toolkit';
import { fetchFiftyMovies, fetchMoviesByGenre } from "./operations";

export const slice = createSlice({
  name: 'movies',
  initialState: {
    data: []
  },
  reducers: {},
  extraReducers: {
    [fetchFiftyMovies.pending]: (state, action) => {
      console.log("Fetching fifty movies.....");
    },
    [fetchFiftyMovies.fulfilled]: (state, action) => {
      if (action.payload.length === 0) {
        return
      }

      const actionPayload = action.payload;
      // state.data = Object.assign({}, actionPayload)
      state.data.push(actionPayload);
    },
    [fetchMoviesByGenre.fulfilled]: (state, action) => {
      if (action.payload.length === 0) {
        return
      }

      const actionPayload = action.payload;
      state.push(actionPayload);
    },
  }
});

export default slice;
