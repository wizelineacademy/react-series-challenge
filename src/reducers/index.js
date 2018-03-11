import { combineReducers } from 'redux';
import trendingGifs from './trending'
import favoriteGifs from './favorites'

export default combineReducers({
  trendingGifs,
  favoriteGifs
});
