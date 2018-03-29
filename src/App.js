import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-root">
          s
        </div>
      </Provider>
    );
  } 
}

export default App;
