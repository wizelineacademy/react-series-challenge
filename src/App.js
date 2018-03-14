import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          GIPHY challenge
          <Navigation />
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
