import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux';
import customMiddleware from '../middleware';

const initialState = {};
const enhancers = [
];
const middleware = [
  ...customMiddleware,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
