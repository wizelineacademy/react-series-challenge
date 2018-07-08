import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/containers/home/";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/a"  render={() => (<div>HOLA</div>)} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
