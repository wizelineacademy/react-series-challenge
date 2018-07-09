import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import rootSaga from './saga';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const initialState = {
};
const store = configureStore(initialState);

store.runSaga(rootSaga);

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
