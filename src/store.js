import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { gif, trending } from './reducers';

const reducer = combineReducers({ gif, trending });

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
