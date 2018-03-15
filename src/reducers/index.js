import { combineReducers } from 'redux';
import search from './search'
import trending from './trending';
import favorites from './favorites';
import modal from './modal';
import details from './details';
export default combineReducers({
  search,
  trending,
  favorites,
  modal,
  details
});
