import registerServiceWorker from './registerServiceWorker';
import routes from './routes'
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

ReactDOM.render(<App routes={routes} />, document.getElementById('root'));
registerServiceWorker();
