import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home'
import Favorites from './components/Favorites'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <NavLink to="/">
              <img src={logo} className="App-logo" alt="jify" />
            </NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
