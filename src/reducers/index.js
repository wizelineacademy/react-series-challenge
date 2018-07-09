import { combineReducers } from 'redux';

import favoriteGifs from './favoriteGifs';
import trendingGifs from './trendingGifs';
import filterText from './filterText';

export default combineReducers({
  favoriteGifs,
  trendingGifs,
  filterText,
});
