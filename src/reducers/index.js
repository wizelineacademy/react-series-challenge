import { combineReducers } from 'redux';
import favorites from './favorites';
import search from './search';
import items from './items';
import error from './error';

export default combineReducers({
  favorites,
  search,
  items,
  error
});
