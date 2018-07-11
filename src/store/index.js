import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from "../sagas";
import customMiddleware from '../middlewares';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhancers = [];

const middleware = [
    sagaMiddleware,
    ...customMiddleware
];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
