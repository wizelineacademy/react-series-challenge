import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from "./components/containers/home/";
import Keeps from "./components/containers/keeps/";

import Navegation from "./components/component/navegation";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navegation/>
      <Switch>
        <Route path="/keeps"  component={Keeps} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
