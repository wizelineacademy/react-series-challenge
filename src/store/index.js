import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '../reducers';
import logger from '../middlewares/logger';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleWare();

// const initialState = {};
const middlewares = [
  sagaMiddleware,
  logger
];

const appliedMiddleware = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  // initialState,
  appliedMiddleware
);

sagaMiddleware.run(rootSaga);

export default store;