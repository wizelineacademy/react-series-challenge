import { createStore, applyMiddleware, compose } from 'redux';
import SagaMiddleware from 'redux-saga';
import state from './state';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = SagaMiddleware();
const enhancers = compose(applyMiddleware(sagaMiddleware));
const initialState = state.load();

const store = createStore(
  reducers,
  initialState,
  enhancers
);

sagaMiddleware.run(sagas);

store.subscribe(() => {
  state.save(store.getState());
});

export default store;
