import { combineReducers } from 'redux';

import api from './api';
import localStorage from './localStorage';


export default combineReducers({
  api,
  localStorage,
});
