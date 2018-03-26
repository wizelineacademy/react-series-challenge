import { combineReducers } from 'redux';
import details from './details_reducer';
import home from './home_reducer';
import favorites from './favorites_reducer';
// import list from './list_reducer';
// import search from './search_reducer';

export default combineReducers({
  home,
  details,
  favorites
});