import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
