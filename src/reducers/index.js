import { combineReducers } from 'redux';
import itemsList from './itemsList';
import loading from './loading';
import search from './search';
import favorites from './favorites';
import error from './error';

export default combineReducers({
  itemsList,
  loading,
  search,
  favorites,
  error,
});
