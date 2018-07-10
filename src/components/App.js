import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import AppContainer from '../components/AppContainer';
import Header from '../components/Header';

import '../styles/Global.style.js';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div>
          <Header />

          <AppContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
