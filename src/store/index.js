import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import customMiddleware from '../middleware';
import trendingGifsSaga from '../sagas/trendingGifs';

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

sagasMiddleware.run(trendingGifsSaga);

export default store;
