import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();

injectGlobal([`
  body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
  }
`]);