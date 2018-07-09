import { combineReducers } from 'redux';
import favorites from './favorites';
import searchFavorites from './searchFavorites';

export default combineReducers({
  favorites,
  searchFavorites,
});
