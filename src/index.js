import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: Lato;
    src: url('https://fonts.googleapis.com/css?family=Lato:300,400,700') ;
  }
  html {
    min-height: 100vh;
    background-size: cover;
    background-image: linear-gradient(151deg, #2a2d4b, #455173 48%, #90abc0);
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
