import { combineReducers } from "redux";

import trendGifs from "./trendGifs";
import searchGifs from "./searchGifs";

export default combineReducers({
  trendGifs,
  searchGifs
});
