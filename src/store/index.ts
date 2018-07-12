import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import gifsFetcher from '../middleware';
import rootSaga from '../sagas/';
import autosave from '../middleware/autosave';

const sagaMiddleware = createSagaMiddleware();

function _getInitialFavs() {
  const data = localStorage.getItem('favs') || "";
  try {
    return JSON.parse(data);
  } catch(_) {
    return {}
  }
}

const initialState = {
  favs: _getInitialFavs()
};
const middleware = [
  sagaMiddleware,
  autosave,
  gifsFetcher,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
);

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(composedEnhancers),
);

sagaMiddleware.run(rootSaga);

export default store;
