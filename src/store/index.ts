import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import gifsFetcher from '../middleware';
import rootSaga from '../sagas/';


const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [
  sagaMiddleware,
  gifsFetcher,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
