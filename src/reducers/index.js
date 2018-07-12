import { combineReducers } from 'redux';

import trendGifs from './trendGifs'
import searchGifs from './searchGifs';
import favoriteGifs from './favoriteGifs';

export default combineReducers({
    trendGifs,
    searchGifs,
    favoriteGifs
});
