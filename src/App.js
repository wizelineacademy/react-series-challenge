import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const RoutedApp = () => (
  <Router>
    <App />
  </Router>
)

export default RoutedApp;
