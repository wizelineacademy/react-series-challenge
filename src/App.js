import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./state/store";
import { db } from "./utils";
import { AppWrapperStyled } from "./App.styled";
import {
  Home,
  Navigation,
  Details,
  Favs,
  SearchResults,
  NotFound
} from "./components";

store.subscribe(() => {
  const { favsReducer: { favs } } = store.getState();
  db.set("favs", favs);
});

const App = () => (
  <Provider store={store}>
    <Router>
      <AppWrapperStyled>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favs" component={Favs} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/search/:query" component={SearchResults} />
          <Route component={NotFound} />
        </Switch>
      </AppWrapperStyled>
    </Router>
  </Provider>
);

export default App;
