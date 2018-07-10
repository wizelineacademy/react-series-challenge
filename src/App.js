import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import GiphyList from './components/GiphyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Giphy</h1>
        </header>
          <SearchBar/>
          <GiphyList/>
      </div>
    );
  }
}

export default App;
