import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './utils/registerServiceWorker';
import App from './appComponents/Main';
import './assets/themes/default.css';
import './assets/styles/main.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
