import {combineReducers} from 'redux';

import giphyReducer from './giphy';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
    giphies: giphyReducer,
    favorites: favoritesReducer
});

export default rootReducer;