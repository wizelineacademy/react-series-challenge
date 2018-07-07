import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

const Routes = () => (
  <Switch>
    <Route path="/favorites" component={Favorites} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
