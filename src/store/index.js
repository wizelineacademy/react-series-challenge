import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import initialState from './state';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [ sagaMiddleware ];

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers(compose(
    applyMiddleware(...middleware),
    ...enhancers,
  ))
);

sagaMiddleware.run(rootSaga);

export default store;
