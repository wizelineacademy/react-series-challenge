import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
