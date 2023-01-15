import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviedb from "../../api";

export const fetchFeatured = createAsyncThunk("movies/getFeatures", () => {
  let endpoints = [
    "/discover/movie?sort_by=popularity.desc",
    "/movie/upcoming",
    "/movie/760161/credits",
    "/movie/899112/videos",
  ];
  return Promise.all(endpoints.map((endpoint) => moviedb.get(endpoint))).then(
    ([
      { data: featured },
      { data: newArrivals },
      { data: casts },
      { data: videos },
    ]) => {
      console.log({ videos });
      return {
        featured,
        newArrivals,
        casts: casts?.cast || [],
        videos: videos?.results || [],
      };
    }
  );
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    featured: [],
    newArrivals: [],
    casts: [],
    videos: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getFeatures: (state) => {
      state.featured = state.data;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFeatured.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFeatured.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.featured = action.payload.featured;
        state.newArrivals = action.payload.newArrivals;
        state.casts = action.payload.casts;
        state.videos = action.payload.videos;
      })
      .addCase(fetchFeatured.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { getFeatures } = moviesSlice.actions;

export default moviesSlice.reducer;
