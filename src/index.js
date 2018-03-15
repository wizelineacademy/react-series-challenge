import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './views/css/reset.css';
import './views/css/style.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
