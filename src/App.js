import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import TrendingList from './components/TrendingList/TrendingList';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Giphy's Site</h1>
          </header>
          <Search />
          <TrendingList />
        </div>
      </Provider>
    );
  }
}

export default App;
