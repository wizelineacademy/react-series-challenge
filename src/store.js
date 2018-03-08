import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { trending } from './reducers';

const reducer = combineReducers({ trending });

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
