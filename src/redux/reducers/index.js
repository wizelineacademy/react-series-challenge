import { combineReducers } from 'redux';

import fetch from './fetch';
import local from './local';


export default combineReducers({
  fetch,
  local,
});
