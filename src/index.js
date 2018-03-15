import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Routes from './Routes'
import {
  StyledTitle
} from './App.style'

ReactDOM.render(
  <Provider store={store}>
    <div className="App">
      <StyledTitle>Awesome Gif App</StyledTitle>
      <Routes />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
