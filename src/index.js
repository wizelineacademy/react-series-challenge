import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import './style/global';
import store from './store';
import App from './components/containers/App';
import registerServiceWorker from './registerServiceWorker';
// import { gif } from './giphy_sdk';

// gif.search({q: 'ryan+gosling'})
//   .then(data => {
//     console.log(data, 'search');
//   });
//   gif.trending()
//   .then(data => {
//     console.log(data, 'trending');
//   });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
