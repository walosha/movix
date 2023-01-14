import { GET_FEATURED_MOVIE } from "./types";
import moviedb from "../../api/moviedb";

// Feature movies from API
export const getNewArrival = () => async (dispatch) => {
  const res = await moviedb.get("/discover/movie?sort_by=popularity.desc");
  dispatch({
    type: GET_FEATURED_MOVIE,
    payload: res.data,
  });
};
