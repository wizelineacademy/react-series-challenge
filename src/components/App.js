import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import FavsPage from "./pages/FavsPage/index";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={HomePage} />;
      <Route path="/favorites" component={FavsPage} />;
    </Switch>
  );
};

export default App;
