import { createStore, applyMiddleware, compose } from 'redux';
import searchValues from '../reducers/searchValues';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [
  sagaMiddleware,
];

const initialState = {
  searchedValue: "trendy",
  gifs: [],
  favoritedImages: [],
  recentFavoriteFilter: [],
};

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);


const store = createStore(
  searchValues,
  initialState,
  composedEnhancers,
  //sagaMiddleware
);

sagaMiddleware.run(rootSaga);

export default store;
