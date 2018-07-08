import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from './middlewares/logger';
import rootReducer from './reducer';
import sagas from './sagas';
import { loadState, saveState } from './services/localStorage';

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(logger, sagaMiddleware)
);
store.subscribe(() => {
  saveState({
    favorites: { favoritesIds: store.getState().favorites.favoritesIds },
  });
});
sagaMiddleware.run(sagas.run);

export default store;
