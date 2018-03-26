import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import TrendingList from './components/TrendingList/TrendingList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
¡            <h1 className="App-title">Welcome to React</h1>
          </header>
          <TrendingList />
        </div>
      </Provider>
    );
  }
}

export default App;
