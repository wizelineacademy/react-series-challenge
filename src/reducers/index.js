import { combineReducers } from 'redux';

import giphyReducer from './giphy'
import customReducer from './custom'

export default combineReducers({
  giphyReducer,
  customReducer,
});
