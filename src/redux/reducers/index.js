import { combineReducers } from 'redux';
import trendingGifsReducer from "./trendingGifsReducer";
import searchGifsReducer from "./searchGifsReducer";

export default combineReducers({
    trendingGifsReducer,
    searchGifsReducer
});