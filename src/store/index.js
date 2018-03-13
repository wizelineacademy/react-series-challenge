import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware
];

const getPreloadedState = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites !== null
    ? { favorites: JSON.parse(favorites) }
    : {};
};

const store = createStore(
  rootReducer,
  getPreloadedState(),
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
