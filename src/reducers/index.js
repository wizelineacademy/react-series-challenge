import { combineReducers } from 'redux';

import gifReducer from './gifReducer';
import gifsFavorites from './gifsFavorites';

const rootReducer = combineReducers({
    gifsTrending: gifReducer,
    gifsFavorites: gifsFavorites,
});

export default rootReducer;
