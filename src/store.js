import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';
import rootSaga from './sagas';
import persistState from 'redux-localstorage';


const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer, persistState('favorites')]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(rootReducer)
    )
  }

  sagaMiddleware.run(rootSaga);

  return store
}