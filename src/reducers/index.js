import { combineReducers } from 'redux';

import trending from './trending';
import favorite from './favorite';

export default combineReducers({
  trending,
  favorite
});
