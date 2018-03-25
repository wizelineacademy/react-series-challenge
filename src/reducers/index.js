import { combineReducers } from 'redux';
import favoritesGif from './favoritesGif';
import searchingGifs from './searchingGifs';
import trendingGifs from './trendingGifs';
import detailGif from './detailGif'

export default combineReducers({
  favoritesGif,
  searchingGifs,
  trendingGifs,
  detailGif
});