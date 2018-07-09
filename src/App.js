import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/containers/home/";
import Keeps from "./components/containers/keeps/";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/keeps"  component={Keeps} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
