import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import customMiddleware from "../middleware";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];

const middleware = [sagaMiddleware, ...customMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(reducers, initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
