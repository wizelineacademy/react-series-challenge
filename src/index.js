import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import initializeStore from './config/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={initializeStore(null)}>
    <Router>
      <App/>
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
