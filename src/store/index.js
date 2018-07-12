import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import customMiddleware from '../middleware';
import sagas from '../sagas';

const sagasMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [
  sagasMiddleware,
  ...customMiddleware,
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

sagasMiddleware.run(sagas);

export default store;
