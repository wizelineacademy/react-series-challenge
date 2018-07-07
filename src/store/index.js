import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../reducers";
import { watcherSaga } from "../sagas";
import customMiddleware from "../middleware";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {};
const middleware = [sagaMiddleware, customMiddleware];

// create a redux store with our reducer above and middleware
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    reduxDevTools
  )
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default store;
