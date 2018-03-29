import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import customMiddleware from '../middleware';
import {APPLICATION_LOCAL_STORAGE_KEY} from './config';
import {initialState as gifInitialState} from '../reducers/gif';

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  ...customMiddleware,
  sagaMiddleware
];

// Enhancers
const createEnhancers = () => {
  let enhancers = [];

  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(
      window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return enhancers;
};

const persistStateDetails = (state) => {
  try {
    let stateCopy = JSON.parse(JSON.stringify(state));

    // Remove unnecesary state details
    stateCopy.gifs.fetching = gifInitialState.fetching;
    stateCopy.gifs.displayed = gifInitialState.displayed;
    stateCopy.gifs.favoritesTextFilter = gifInitialState.favoritesTextFilter;

    let serializedState = JSON.stringify(stateCopy);
    localStorage.setItem(APPLICATION_LOCAL_STORAGE_KEY, serializedState);
  } catch (e) {}
}

const retrievePreviousStateDetails = () => {
  let result = {};

    try {
      let serializedState =
        window.localStorage.getItem(APPLICATION_LOCAL_STORAGE_KEY);

      if (serializedState) {
        result = JSON.parse(serializedState);;
      }
    } catch (e) {}

  return result;
}

const composedEnhancers =
  compose(applyMiddleware(...middlewares), ...createEnhancers());

// Rehydrate the store
let initialState = retrievePreviousStateDetails();
// Store object
const store = createStore(rootReducer, initialState, composedEnhancers);

store.subscribe(() => persistStateDetails(store.getState()));

sagaMiddleware.run(rootSaga);

export default store;
