import { combineReducers } from 'redux';
import gimphyListReducer from './gimphyList-reducer';
import favoritesReducer from './favorites-reducer'


const rootReducer = combineReducers({
  gimphyList: gimphyListReducer,
  favorites: favoritesReducer
});

export default rootReducer;