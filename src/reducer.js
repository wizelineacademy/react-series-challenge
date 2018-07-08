import { combineReducers } from 'redux';
import homeReducer from './containers/Home/reducer';
import favoritesReducer from './containers/Favorites/reducer';

export default combineReducers({
  home: homeReducer,
  favorites: favoritesReducer,
});
