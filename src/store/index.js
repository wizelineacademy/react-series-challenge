import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import customMiddleware from '../middleware';

const initialState = {};
const middleware = [ ...customMiddleware ];

const enhancers = compose(
  applyMiddleware(...middleware)
);

const store = createStore(
  rootReducer,
  initialState,
  enhancers
);

export default store;