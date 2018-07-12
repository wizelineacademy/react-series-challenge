import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.styled';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

const AppAndRouter = (
  <Router>
    <App />
  </Router>
);

const store = configureStore()

const renderApp = () => ReactDOM.render(
  <Provider store={store}>
    {AppAndRouter}
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', () => {
    renderApp()
  })
}

renderApp()
