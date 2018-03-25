import { combineReducers } from 'redux';
import favoritesGif from './favoritesGif';
import searchingGifs from './searchingGifs';
import trendingGifs from './trendingGifs';

export default combineReducers({
  favoritesGif,
  searchingGifs,
  trendingGifs
});