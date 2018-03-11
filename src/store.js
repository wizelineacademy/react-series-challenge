import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { gif, search, favorites, trending } from './reducers';

const reducer = combineReducers({ gif, search, favorites, trending });

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
