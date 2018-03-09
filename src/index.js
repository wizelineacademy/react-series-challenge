import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers';
import rootSaga from './sagas'
import registerServiceWorker from './registerServiceWorker';

import Home from './component/Home'

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore)
const store = createStoreWithMiddleware(reducers)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Home}/>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
