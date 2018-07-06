import { combineReducers } from "redux";
import GifsReducer from "./GifsReducer";

export default combineReducers({
  gifs: GifsReducer
});
