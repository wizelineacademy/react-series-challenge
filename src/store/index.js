import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import customMiddleware from '../middleware';
import initialState from './state';

const middleware = [ ...customMiddleware ];

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  enhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
