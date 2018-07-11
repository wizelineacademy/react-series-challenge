import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import NoMatch from "./Pages/NoMatch";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/favorites" component={Favorites} />
    <Redirect from="/favorite" to="/favorites" />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
