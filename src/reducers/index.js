import { combineReducers } from 'redux';

import giphy from './giphy';
import favorites from './favorites';

export default combineReducers({
    giphy,
    favorites
});