import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import reducers from "../reducers";
import rootSaga from "../sagas";
import customMiddleware from "../middleware";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [sagaMiddleware, customMiddleware];

// create a redux store with our reducer above and middleware
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(rootSaga);

export { store, persistor };
