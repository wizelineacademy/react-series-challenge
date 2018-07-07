import { combineReducers } from 'redux';
import gifts from './gifts';
import favorites from './favorites'

export default combineReducers({
  gifts,
  favorites,
});
