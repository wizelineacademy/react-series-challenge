import { createStore, compose } from 'redux';
import combineReducers from './reducers';

const initialState = {};

const middleware = [

];

const composedEnhancers = compose(
    applyMiddleware(...middleware)
);

const index = createStore(
    combineReducers,
    initialState,
    composedEnhancers
);

export default index;