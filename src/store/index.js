import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware
];

const store = createStore(
  () => {},
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
