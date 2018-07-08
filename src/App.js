import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, NavLink, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Favs from './components/Favs'
import Search from './components/Search'
import Home from './components/Home'
import Page404 from './components/Page404'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1>React Challenge</h1>
          <ul>
            <li><NavLink to="/favs">Your favs</NavLink></li>
            <li><NavLink to="/">Trending</NavLink></li>            
          </ul>
          <Switch>
            <Route exact path="/favs" component={Favs} />
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
