import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./users/reducer";
import moviesReducer from "./movies/moviesSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
});

export default persistReducer(persistConfig, rootReducer);
