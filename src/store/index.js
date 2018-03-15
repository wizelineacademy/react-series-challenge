import { createStore, applyMiddleware, compose } from 'redux';
import SagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = SagaMiddleware();

const initialState = {};
const enhancers = compose(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducers,
  initialState,
  enhancers
);

sagaMiddleware.run(sagas);

export default store;
