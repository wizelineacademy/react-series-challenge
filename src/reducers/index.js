import { combineReducers } from "redux";

import trendGifs from "./trendGifs";
import searchGifs from "./searchGifs";
import favorites from "./favorites";
import search from "./search";

export default combineReducers({
  trendGifs,
  searchGifs,
  favorites,
  search
});
