import { combineReducers } from "redux";
import GifsReducer from "./GifsReducer";
import SearchGifs from "./SearchReducer";
import FavoriteGifs from "./FavoriteReducer";

export default combineReducers({
  gifs: GifsReducer,
  sGifs: SearchGifs,
  fGifs: FavoriteGifs
});
