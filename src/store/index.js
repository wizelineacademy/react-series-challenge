import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const initialState   = {};
const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware
];

const composedEnhancers = compose(
    applyMiddleware(...middleware)
);

const index = createStore(
    combineReducers,
    initialState,
    composedEnhancers
);
sagaMiddleware.run(rootSaga);
export default index;