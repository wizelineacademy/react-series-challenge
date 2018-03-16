import { combineReducers } from 'redux';
import favorites from './favorites';
import search from './search';
import items from './items';

export default combineReducers({
  favorites,
  search,
  items
});
