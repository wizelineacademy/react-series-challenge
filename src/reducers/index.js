import { combineReducers } from 'redux';
import trendingGifs from './trending'
import favoriteGifs from './favorites'
import searchGifs from './search'

export default combineReducers({
  trendingGifs,
  favoriteGifs,
  searchGifs
});
