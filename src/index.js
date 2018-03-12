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


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
