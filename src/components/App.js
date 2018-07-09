import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import GifGrid from '../components/GifGrid';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />

          <div className="App-container mt">
            <SearchBar />

            <GifGrid />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
