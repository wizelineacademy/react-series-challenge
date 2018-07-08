import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink to="/">Trending gifs</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Mis favoritos</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
