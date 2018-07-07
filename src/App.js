import React, { Component } from 'react';
import { Route, Redirect, Link, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Favorites from './components/Favorites';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
