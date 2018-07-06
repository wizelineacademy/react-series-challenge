import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPanel from './components/MainPanel';

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

const RoutedApp = () => (
  <Router>
    <App />
  </Router>
)

export default RoutedApp;
