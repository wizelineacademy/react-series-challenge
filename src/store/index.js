import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import giphySaga from '../sagas/giphySaga';

const SagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [
  SagaMiddleware
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

SagaMiddleware.run(giphySaga);

export default store;
