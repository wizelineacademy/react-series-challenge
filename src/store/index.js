import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import customMiddleware from '../middleware';

const initialState = {};
const enhancers = [];
const middleware = [
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

export default store;
