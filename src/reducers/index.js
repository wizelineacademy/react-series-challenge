import { combineReducers } from 'redux';
import search from './search'
import trending from './trending';
export default combineReducers({
  search,
  trending
});
