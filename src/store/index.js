import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import sagas from "./sagas";

const initialState = {};
const middleware = [];
const sagaMiddleware = createSagaMiddleware();

const enhancers = [applyMiddleware(...middleware, sagaMiddleware)];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(compose(...enhancers))
);
sagaMiddleware.run(sagas, {});

export default store;
