import React, { Component } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          GIPHY challenge
          <ul>
            <li><NavLink to="/Home" activeClass="active">Home</NavLink></li>
            <li><NavLink to="/Favorites" activeClass="active">Favorites</NavLink></li>
          </ul>
        </header>

        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Favorites" component={Favorites} />
          <Redirect to="/Home" />
        </Switch>
      </div>
    );
  }
}

export default App;
