import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage, DetailPage, FavsPage } from "./pages";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={HomePage} />;
      <Route path="/favorites" component={FavsPage} />;
      <Route path="/detail" component={DetailPage} />;
    </Switch>
  );
};

export default App;
