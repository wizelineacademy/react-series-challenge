import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";

// ...
import { helloSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({ type });

export default store;
