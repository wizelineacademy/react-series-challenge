import { combineReducers } from 'redux';

import trending from './trending';
import favorite from './favorite';
import search from './search';

export default combineReducers({
  trending,
  favorite,
  search
});
