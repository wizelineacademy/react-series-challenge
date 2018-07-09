import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./../reducers/";
// import rootMiddleware from './../middleware/';

import rootSagas from './../sagas/';

// sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // rootMiddleware,
  sagaMiddleware
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSagas);

export default store;