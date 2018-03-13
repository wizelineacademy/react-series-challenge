import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import injectGlobalStyles from './GlobalStyles.js'
import theme from './constants/themeConfig';

injectGlobalStyles();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
