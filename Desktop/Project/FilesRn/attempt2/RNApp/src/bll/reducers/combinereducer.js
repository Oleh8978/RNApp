import { combineReducers } from "redux";

import imageReducer from "./imagesReducer";
import nameReducer from "./namesReducer";

export default combineReducers({
  imageReducer,
  nameReducer
});
