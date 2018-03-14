import { combineReducers } from 'redux';
import search from './search'
import trending from './trending';
import favorites from './favorites';
export default combineReducers({
  search,
  trending,
  favorites
});
