import { createStore, applyMiddleware } from "redux";

// Sagas
import createSagaMiddleware from "redux-saga";
// import rootSagas from "./sagas/";

import rootReducer from "./../reducers/";
import rootMiddleware from './../middleware/';

import rootSagas from './../sagas/';


// sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(rootMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSagas);

export default store;