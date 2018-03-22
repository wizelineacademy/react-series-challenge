import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux/reducer';
import rootSaga from '../redux/saga';
import customMiddleware from '../middleware';
import { debounce } from '../utils';

const persistedState = JSON.parse(localStorage.getItem('state'));
const saveState = debounce((state) => { localStorage.setItem('state', state); }, 500);

const initialState = {
  ...persistedState,
}

const enhancers = [
];
const middleware = [
  ...Object.values(customMiddleware),
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

store.subscribe(() => {
  saveState(JSON.stringify(store.getState()));
});

customMiddleware.sagaMiddleware.run(rootSaga);

export default store;
