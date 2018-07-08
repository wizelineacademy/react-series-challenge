import { combineReducers } from 'redux';
import favorites from './favorites';
import giphyApi from './giphyApi'

const reducers = combineReducers({
  giphyApi,
  favorites,
})

export default reducers;