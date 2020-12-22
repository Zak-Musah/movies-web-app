import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import movieReducer from "./movieReducer";

const reducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
});

export default reducers;
