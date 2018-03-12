import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage'

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware
];

const persistedState = loadState()
const store = createStore(rootReducer, persistedState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

store.subscribe(() => {
  saveState({
    favoriteGifs: store.getState().favoriteGifs
  })
})

sagaMiddleware.run(rootSaga);

export default store;
