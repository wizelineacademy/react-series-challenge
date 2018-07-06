import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const enhancers = [];
const middleware = [];

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
