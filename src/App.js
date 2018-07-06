import React, { Component } from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="App-container mt">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
