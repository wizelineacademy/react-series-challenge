import { combineReducers } from 'redux';

import home from './home/reducer';
import favorites from './favorites/reducer';
import view from './view/reducer';

const pagesReducers = combineReducers({
  home,
  favorites,
  view,
});

export default pagesReducers;
