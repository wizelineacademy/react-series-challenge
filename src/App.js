import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Home, Navigation, Details, Favs, NotFound } from "./components";

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favs" component={Favs} />
        <Route exact path="/details/:id" component={Details} />
        <Route component={NotFound} />
        <Route />
      </Switch>
    </div>
  </Router>
);

export default App;
