import { combineReducers } from 'redux';
import gifts from './gifts';
import favoritesReducer from './Favorites';
import isModalOpen from './giftModal';

export default combineReducers({
  gifts,
  isModalOpen,
  favoritesReducer,
});
