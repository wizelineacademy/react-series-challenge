import { combineReducers } from 'redux';

import trending from './trending';
import search from './search';

export default combineReducers({
  trending,
  search,
});
