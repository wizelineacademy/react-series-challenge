import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux/reducer';
import rootSaga from '../redux/saga';
import customMiddleware from '../middleware';

const initialState = {};
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

customMiddleware.sagaMiddleware.run(rootSaga);

export default store;
