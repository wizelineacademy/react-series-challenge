import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import logger from '../middleware/logger';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [logger, sagaMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
