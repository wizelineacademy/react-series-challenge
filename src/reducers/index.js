import { combineReducers } from "redux";
import trendingGifs from "./GifsReducer";
import searchGifs from "./SearchReducer";
import favoriteGifs from "./FavoriteReducer";

export default combineReducers({
  trendingGifs,
  searchGifs,
  favoriteGifs
});
