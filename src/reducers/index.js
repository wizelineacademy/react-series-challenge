import { combineReducers } from 'redux'
import trending from './trending'
import favorites from './favorites'
import search from './search'

export default combineReducers({
  trending,
  favorites,
  search
});
