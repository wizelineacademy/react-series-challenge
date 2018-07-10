import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../store';

import AppContainer from '../components/AppContainer';
import Header from '../components/Header';

import '../styles/Global.style.js';


class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={ store }>
          <div>
            <Header />

            <AppContainer />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
