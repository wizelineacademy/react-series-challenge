import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers';
import rootSaga from './sagas'
import registerServiceWorker from './registerServiceWorker';

import Header from './component/Header'
import Home from './component/Home'
import Favorites from './component/Favorites'
import Detail from './component/Detail'

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore)
const store = createStoreWithMiddleware(reducers)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Header}/>
        <Switch>
          <Route path="/gimphy_details/:gimphyId" component={Detail} />
          <Route path="/favorites" component={Favorites}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
