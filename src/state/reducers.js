import { combineReducers } from "redux";

import { homeReducer } from "../components/Home/";
import { imageLoaderReducer } from "../components/shared/ImageLoader";

export default combineReducers({
  homeReducer,
  imageLoaderReducer
});
