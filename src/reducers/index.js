import trending from './trending';
import search from './search';
import favorites from './favorites';
import { combineReducers } from 'redux';

export default combineReducers({
  trending,
  search,
  favorites
});
