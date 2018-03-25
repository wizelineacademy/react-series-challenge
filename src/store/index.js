import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import customMiddleware from '../middleware';

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...customMiddleware,
  sagaMiddleware,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);
const favoritesGifsData = localStorage.getItem('favoritesGifs');
if (favoritesGifsData) {
  initialState.favoritesGifs = JSON.parse(favoritesGifsData);
}
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;