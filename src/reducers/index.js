import { combineReducers } from 'redux';
import favorites from './favorites';
import search from './search';

export default combineReducers({
  favorites,
  search
});
