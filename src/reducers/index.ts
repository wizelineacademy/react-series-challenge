import { combineReducers } from 'redux';

import home from './home';
import favs from './favs';

export default combineReducers({
  home,
  favs,
});
