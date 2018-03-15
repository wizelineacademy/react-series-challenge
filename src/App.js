import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MainAppLayout } from './layouts/MainApp';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <MainAppLayout />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
