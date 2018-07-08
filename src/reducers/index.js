import { combineReducers } from 'redux';
import cards from './cards';
import search from './search';

export default combineReducers({
  cards, search
});
