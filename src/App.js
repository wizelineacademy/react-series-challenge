import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import store from "./state/store";
import { Home, Navigation, Details, Favs, NotFound } from "./components";

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
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
  </Provider>
);

export default App;
