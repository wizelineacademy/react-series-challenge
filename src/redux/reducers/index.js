import { combineReducers } from 'redux';
import gifts from './gifts';
import favorites from './favorites'
import isModalOpen from './giftModal'

export default combineReducers({
  gifts,
  favorites,
  isModalOpen,
});
