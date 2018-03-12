import { combineReducers } from "redux";

import { favsReducer } from "../components/Favs";
import { homeReducer } from "../components/Home/";
import { detailsReducer } from "../components/Details";
import { imageLoaderReducer } from "../components/shared/ImageLoader";

export default combineReducers({
  homeReducer,
  favsReducer,
  detailsReducer,
  imageLoaderReducer
});
