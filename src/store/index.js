import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware
];

const store = createStore(
  () => {},
  applyMiddleware(...middleware)
);

export default store;
