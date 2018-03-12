import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import {Provider} from "react-redux";
import HomeContainer from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={'/'} component={HomeContainer} />
        <Route path={'/favorites'} render={() => (
          <h2>FAVORITES</h2>
        )} />
        <Route path={'/detail/:id'} render={() => (<h2>DETAILS</h2>)} />
        <Route render={() => (<h2>NOT FOUND</h2>)} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
