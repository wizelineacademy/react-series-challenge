import { combineReducers } from 'redux';
import itemsList from './itemsList';
import loading from './loading';
import search from './search';

export default combineReducers({
  itemsList,
  loading,
  search,
});
