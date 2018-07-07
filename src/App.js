import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
