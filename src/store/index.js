import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import {rootSaga} from '../sagas';

const initState = {};

const sagaMiddleware = createSagaMiddleware();
const enhancers = [];
const store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(sagaMiddleware),...enhancers),
);

sagaMiddleware.run(rootSaga);

export default store;