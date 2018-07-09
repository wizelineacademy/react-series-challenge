import { createStore, applyMiddleware, compose } from 'redux';
import searchValues from '../reducers/searchValues';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import { loadState, saveState } from './localStorage'

const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();
const enhancers = [];
const middleware = [
  sagaMiddleware,
];
/*
const initialState = {
  searchedValue: "trendy",
  gifs: [],
  favoritedImages: [],
};*/

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);


const store = createStore(
  searchValues,
  persistedState,
  composedEnhancers,
);

store.subscribe(() => {
  saveState({
    searchedValue: "trendy",
    favoritedImages: store.getState().favoritedImages,
    gifs: store.getState().gifs,
  });
});

sagaMiddleware.run(rootSaga);

export default store;
