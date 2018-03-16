import {combineReducers} from "redux";
import trending from "./trending";
import favorites from "./favorites";

const rootReducer = combineReducers({
  favorites,
  trending
});

export default rootReducer;
