import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectGlobalStyles from './GlobalStyles.js'
import AppWrapper from './AppWrapper';

injectGlobalStyles();

ReactDOM.render(
  <AppWrapper>
    <App />
  </AppWrapper>,
  document.getElementById('root')
);

registerServiceWorker();
