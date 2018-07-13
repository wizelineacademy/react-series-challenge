import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config();

ReactDOM.render(

    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
