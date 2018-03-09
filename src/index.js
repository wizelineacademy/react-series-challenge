import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import Home from './component/Home'

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Home}/>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
