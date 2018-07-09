import { combineReducers } from "redux";
import trending from "./trendingReducer";
import favs from "./favsReducer";

export default combineReducers({
  trending,
  favs
});
