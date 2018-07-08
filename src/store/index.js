import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import customMiddleware from "../middleware";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];

const middleware = [sagaMiddleware, ...customMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const persistConfig = {
  key : "root",
  storage,
  whitelist: ["favoriteGifs"]
};

const persistedReducer=  persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
