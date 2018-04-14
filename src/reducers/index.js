import { combineReducers } from 'redux';

import trendingGifs from './trendingGifs';
import favoriteGifs from './favoriteGifs';

export default combineReducers({
  trendingGifs,
  favoriteGifs
});