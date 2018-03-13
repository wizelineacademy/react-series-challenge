import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "../sagas";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
