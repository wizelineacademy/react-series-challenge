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
      <Route path="/keeps"  component={Favorites} />
      <Route exact path="/home" component={Home} />
      </Switch>
      </React.Fragment>
    );
  }

  // <Redirect to={{
  //   pathname: "/home",
  //   state: { currentPath: 'NOT FOUND PAGE' },
  // }} />
export default App;
