import { combineReducers } from 'redux';
import homeReducer from './containers/Home/reducer';
import favoritesReducer from './containers/Favorites/reducer';
import gifModalReducer from './containers/GifModal/reducer';

export default combineReducers({
  home: homeReducer,
  favorites: favoritesReducer,
  gifModal: gifModalReducer,
});
