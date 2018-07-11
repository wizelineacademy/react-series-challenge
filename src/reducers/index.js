import {combineReducers} from 'redux';

import filterReducer from './filter';
import viewReducer from './view';
import giphyReducer from './giphy';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
    view: viewReducer,
    filter: filterReducer,
    giphies: giphyReducer,
    favorites: favoritesReducer
});

export default rootReducer;