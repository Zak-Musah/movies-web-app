import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import modelReducer from "./modelReducer";

const reducers = combineReducers({
  errors: errorReducer,
  models: modelReducer,
});

export default reducers;
