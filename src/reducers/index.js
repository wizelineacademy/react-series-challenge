import { combineReducers } from 'redux';

import giphy from './giphy';
import favorites from './favorites'
import trending from './trending';
import search from './search';

export default combineReducers({
  favorites,
  trending,
  search,
  giphy,
});