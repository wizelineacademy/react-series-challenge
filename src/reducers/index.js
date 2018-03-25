import { combineReducers } from 'redux';
import favoritesGifs from './favoritesGif';
import searchingGifs from './searchingGifs';
import trendingGifs from './trendingGifs';
import detailGif from './detailGif'

export default combineReducers({
  favoritesGifs,
  searchingGifs,
  trendingGifs,
  detailGif
});