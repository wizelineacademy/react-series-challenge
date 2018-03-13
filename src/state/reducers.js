import { combineReducers } from "redux";

import { favsReducer } from "../components/Favs";
import { homeReducer } from "../components/Home/";
import { searchReducer } from "../components/Search";
import { detailsReducer } from "../components/Details";
import { imageLoaderReducer } from "../components/shared/ImageLoader";

export default combineReducers({
  homeReducer,
  favsReducer,
  searchReducer,
  detailsReducer,
  imageLoaderReducer
});
