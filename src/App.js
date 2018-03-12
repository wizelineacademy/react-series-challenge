import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MainAppLayout } from './layouts/MainApp';
import createHistory from 'history/createBrowserHistory';
import pathNames from './routes';
import './App.css';
import {
  Route,
  Switch,
} from 'react-router-dom';
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Switch>
            <Route path={ pathNames.HOME_PATH } component={ MainAppLayout } />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
