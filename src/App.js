import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPanel from './components/MainPanel';
import store from './store';
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainPanel />
      </div>
    );
  }
}

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

const RoutedApp = () => (
  <Router>
    <ConnectedApp />
  </Router>
)

export default RoutedApp;
