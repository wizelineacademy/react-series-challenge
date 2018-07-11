import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navigation/Navbar";

import { Container } from "./App.style";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return(
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Routes;