import { combineReducers } from 'redux';
import homeReducer from './home-reducer';
import favoritesReducer from './favorites-reducer'


const rootReducer = combineReducers({
  home: homeReducer,
  favorites: favoritesReducer
});

export default rootReducer;