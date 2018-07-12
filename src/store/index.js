import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from "../sagas";
// import customMiddleware from '../middlewares';

const sagaMiddleware = createSagaMiddleware();
// const initialState = {};
// const enhancers = [];

const middleware = [
  sagaMiddleware,
  // ...customMiddleware
];

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
  // initialState,
  composedEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;