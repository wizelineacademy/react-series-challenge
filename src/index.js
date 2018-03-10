import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import App from './appComponents/Main';
import './assets/themes/default.css';
import './assets/styles/main.css';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

registerServiceWorker();
