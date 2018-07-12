import { combineReducers } from 'redux';
import homeReducer from './containers/Home/reducer';
import favoritesReducer from './containers/Favorites/reducer';
import gifModalReducer from './containers/GifModal/reducer';
import locationReducer from './containers/Location/reducer';

export default combineReducers({
  home: homeReducer,
  favorites: favoritesReducer,
  gifModal: gifModalReducer,
  location: locationReducer,
});
