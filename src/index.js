import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

// Reducers
import mainReducer from './redux/reducers';
// Main Components
import { Home, GIFView } from './views';
// Utils
import { loadState, saveState } from './util/localStorage';
// Sagas
import rootSaga from './sagas';
// Middlewares
import logger from './middlewares/logger';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();

let middlewares = [];

middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);
middlewares.push(logger);

const persistedState = loadState();

const store = createStore(mainReducer, persistedState, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveState({
    app: store.getState().app
  });
});

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: black;
    }
`;

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gif/:id" component={GIFView} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
