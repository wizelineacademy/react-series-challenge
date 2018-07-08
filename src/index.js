import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";

import './index.css';
import App from './App';

import store from './redux/store/';

// Initial the storage flow
store.dispatch({ type: 'LOCALSTORAGE_GET' });

// TODO: REMOVED
window.z = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));