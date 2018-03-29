import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './style/global';
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
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
