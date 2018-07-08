import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import reducers from "../reducers";
import rootSaga from "../sagas";
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

const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(rootSaga);

export { store, persistor };
