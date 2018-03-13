import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware
];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
