import { combineReducers } from "redux";
import GifsReducer from "./GifsReducer";
import SearchGifs from "./SearchReducer";

export default combineReducers({
  gifs: GifsReducer,
  sGifs: SearchGifs
});
