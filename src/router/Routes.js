import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Containers/HomePage";
//import Fav from "../Containers/Fav";
import Search from "../Containers/SearchPage";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
  {/*<Route exact path="/fav" component={Fav} />*/}
        <Route exact path="/search" component={Search} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;