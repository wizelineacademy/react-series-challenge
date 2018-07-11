import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
// import rootSaga from "../sagas";
// import customMiddleware from '../middlewares';

// const sagaMiddleware = createSagaMiddleware();
// const initialState = {};
// const enhancers = [];

// const middleware = [
//   sagaMiddleware,
//   ...customMiddleware
// ];

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers,
// );

const store = createStore(
  reducer,
  // initialState,
  // composedEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// sagaMiddleware.run(rootSaga);

export default store;