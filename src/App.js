import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from "./components/containers/home/";
import Favorites from "./components/containers/favorites";

import Navegation from "./components/component/navegation";

const App = ({ ...props }) => {
  return (
    <React.Fragment>
      <Navegation/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/keeps"  component={Favorites} />
        <Redirect to={{
          pathname: "/home",
          state: { from: 'NOT FOUND PAGE' },
        }} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
