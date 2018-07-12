import { combineReducers } from 'redux';

import gifs from './gifsReducer';
import favorites from './favoritesReducer';

export default combineReducers({
  favorites,
  gifs
});
