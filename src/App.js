import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from "./components/containers/home/";
import Keeps from "./components/containers/keeps/";

import Navegation from "./components/component/navegation";

const App = ({ ...props }) => {
  return (
    <React.Fragment>
      <Navegation/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/keeps"  component={Keeps} />
        <Redirect to={{
          pathname: "/home",
          state: { from: 'NOT FOUND PAGE' },
        }} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
